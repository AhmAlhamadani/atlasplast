import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  phone: string;
  option: string;
  message: string;
};

const ContactFormTwo = () => {
  const { t, i18n } = useTranslation();
  
  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";


  // Dynamic Zod schema based on current language
  const schema = z.object({
    name: z.string().min(1, t("contact_form.validation.name_required")),
    phone: z.string().min(1, t("contact_form.validation.phone_required")).regex(/^[0-9+\-\s()]+$/, t("contact_form.validation.phone_invalid")),
    option: z.string().min(1, t("contact_form.validation.option_required")),
    message: z.string().min(1, t("contact_form.validation.message_required")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success(t("contact_form.success_message"));
    reset();
  };

  return (
    <div className={isRTL ? "text-right" : "text-left"}>
      <form className="space-y-7 mt-11" onSubmit={handleSubmit(onSubmit)}>
        <div className={`flex flex-col md:flex-row md:gap-7 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div className="flex-1">
            <input
              type="text"
              {...register("name")}
              placeholder={t("contact_form.name_placeholder")}
              className={`w-full rounded-full px-4 py-3 border border-white text-[16px] ${isArabic ? 'font-arabic' : 'font-secondary'} bg-white placeholder-textColor text-textColor outline-none hover:border-primaryBlue focus:border-primaryBlue duration-300 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
            />
            {errors.name && (
              <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'} ${isArabic ? 'font-arabic' : 'font-secondary'}`}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <input
              type="tel"
              {...register("phone")}
              placeholder={t("contact_form.phone_placeholder")}
              className={`w-full rounded-full px-4 py-3 border border-white text-[16px] ${isArabic ? 'font-arabic' : 'font-secondary'} bg-white placeholder-textColor text-textColor outline-none hover:border-primaryBlue focus:border-primaryBlue duration-300 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
            />
            {errors.phone && (
              <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'} ${isArabic ? 'font-arabic' : 'font-secondary'}`}>
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <select
            {...register("option")}
            className={`w-full rounded-full px-4 py-3 border border-white text-[16px] ${isArabic ? 'font-arabic' : 'font-secondary'} bg-white placeholder-textColor text-textColor outline-none hover:border-primaryBlue focus:border-primaryBlue duration-300 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <option value="" disabled>
              {t("contact_form.option_placeholder")}
            </option>
            <option value="option1">{t("contact_form.option_product")}</option>
            <option value="option2">{t("contact_form.option_investment")}</option>
          </select>
          {errors.option && (
            <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'} ${isArabic ? 'font-arabic' : 'font-secondary'}`}>
              {errors.option.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            rows={4}
            {...register("message")}
            placeholder={t("contact_form.message_placeholder")}
            className={`w-full rounded-lg px-4 py-3 border border-white text-[16px] ${isArabic ? 'font-arabic' : 'font-secondary'} bg-white placeholder-textColor text-textColor outline-none hover:border-primaryBlue focus:border-primaryBlue duration-300 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
          />
          {errors.message && (
            <p className={`text-red-500 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'} ${isArabic ? 'font-arabic' : 'font-secondary'}`}>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className={isRTL ? "flex justify-end" : ""}>
          <Button
            type="submit"
            className={`bg-primaryBlue text-white hover:bg-secondaryColor transition duration-300 ${isArabic ? 'font-arabic' : 'font-secondary'}`}
          >
            {t("contact_form.send_button")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormTwo;
