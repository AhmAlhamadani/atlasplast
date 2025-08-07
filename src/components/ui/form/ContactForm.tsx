import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Button from "../../common/Button";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  number: z.string().min(1, "Number is required"),
  chooseOption: z.string().min(1, "Please choose an option"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted", data);
    toast.success("Form submitted successfully!");
    reset(); 
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border-b pb-3 text-[16px] text-textColor font-normal font-secondary outline-none duration-300 ease-in-out ${
      errors[field]
        ? "border-red-500"
        : "border-primaryBorder hover:border-b-primary focus:border-b-primary"
    }`;

  return (
    <div>
      <form className="md:mt-15 mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
          <div>
            <input
              type="text"
              {...register("name")}
              className={inputClass("name")}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              className={inputClass("email")}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("number")}
              className={inputClass("number")}
              placeholder="Your Number"
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("chooseOption")}
              className={inputClass("chooseOption")}
            >
              <option value="">Choose a Reason</option>
              <option value="support">Customer Support</option>
              <option value="quote">Request a Quote</option>
              <option value="feedback">Give Feedback</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="other">Other</option>
            </select>
            {errors.chooseOption && (
              <p className="text-red-500 text-sm mt-1">
                {errors.chooseOption.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <textarea
            {...register("message")}
            className={inputClass("message")}
            placeholder="Message here.."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="md:mt-12 mt-7">
          <Button type="submit">Send A Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
