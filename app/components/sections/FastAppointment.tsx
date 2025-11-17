"use client";

import { FormEvent, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+ ]+$/;
const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const baseInputClasses =
  "w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-[inset_0_1px_0_rgba(15,23,42,0.08)] transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-[0_20px_40px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2";

const sanitizeInput = (value: string) => value.replace(/[<>]/g, "");

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";
type FieldName = keyof typeof initialFormState;
type FieldErrors = Partial<Record<FieldName, string>>;

const FastAppointment = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [botField, setBotField] = useState("");

  const handleFieldChange =
    (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        field === "message" ? sanitizeInput(event.target.value) : sanitizeInput(event.target.value);
      setFormData((previous) => ({ ...previous, [field]: value }));
      if (fieldErrors[field]) {
        setFieldErrors((previous) => ({ ...previous, [field]: "" }));
      }
      if (status === "error") {
        setServerMessage("");
      }
    };

  const validateForm = () => {
    const errors: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      errors.name = "Lütfen adınızı girin.";
    }
    if (!trimmedPhone) {
      errors.phone = "Telefon numarası zorunludur.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      errors.phone = "Lütfen geçerli bir telefon numarası girin.";
    }
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      errors.email = "Lütfen geçerli bir e-posta adresi girin.";
    }

    setFieldErrors(errors);
    return {
      isValid: Object.keys(errors).length === 0,
      trimmedName,
      trimmedPhone,
      trimmedEmail,
      trimmedMessage: formData.message.trim(),
    };
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setFieldErrors({});
    setServerMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    setServerMessage("");

    if (botField) {
      setStatus("error");
      setServerMessage("Gönderim gerçekleştirilemedi. Lütfen tekrar deneyin.");
      return;
    }

    const { isValid, trimmedName, trimmedPhone, trimmedEmail, trimmedMessage } = validateForm();

    if (!isValid) {
      setStatus("error");
      setServerMessage("Lütfen bilgilerinizi kontrol edin.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerMessage("Teşekkürler! Randevu talebiniz bize ulaştı.");
        setFormData(initialFormState);
      } else {
        setStatus("error");
        setServerMessage(
          typeof data?.error === "string"
            ? data.error
            : "Sunucuya bağlanırken bir sorun oluştu. Lütfen tekrar deneyin.",
        );
      }
    } catch {
      setStatus("error");
      setServerMessage("Bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.");
    }
  };

  const showSuccessState = status === "success";

  return (
    <section
      id="fast-appointment"
      className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-[#F3EBDF] px-4 py-1 text-sm font-semibold tracking-[0.3em] text-[#384B70]">
            Hızlı Randevu
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
              İlk ziyareti planlayın, ekibimiz hemen sizi arasın.
            </h2>
            <span className="accent-line" />
          </div>
          <p className="text-lg leading-relaxed text-slate-600">
            Premium kliniğimizde randevu almak için formu doldurun. Tüm talepleri dakikalar içinde yanıtlıyor ve
            size en uygun zaman dilimini birlikte belirliyoruz.
          </p>
          <div className="rounded-3xl border border-slate-100/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-sm uppercase tracking-wider text-slate-500">Yardım mı gerekiyor?</p>
            <a
              href="tel:+905455555050"
              className="mt-2 inline-flex text-3xl font-semibold text-slate-900 transition hover:text-[#384B70]"
            >
              +90 545 555 50 50
            </a>
            <p className="mt-1 text-sm text-slate-500">Hafta içi 09:00 – 20:00 arası yanıt veriyoruz.</p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-white/60 bg-white/90 p-5 shadow-[0_35px_120px_rgba(15,23,42,0.18)] backdrop-blur-lg md:p-8">
            {showSuccessState ? (
              <div
                className="space-y-6 text-center animate-success-alert"
                role="status"
                aria-live="polite"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900">Talebiniz Alındı</h3>
                  <p className="text-base text-slate-600">
                    Ekibimiz en kısa sürede sizinle iletişime geçecek. İsterseniz WhatsApp üzerinden de yazabilirsiniz.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-5 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
                  >
                    Yeni Talep Gönder
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7C3A3] px-5 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
                  >
                    WhatsApp&apos;tan Yaz
                  </a>
                </div>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                aria-busy={status === "loading"}
                noValidate
              >
                <div
                  className="hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="clinic-note">Bu alanı boş bırakın</label>
                  <input
                    id="clinic-note"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(event) => setBotField(event.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Adınız Soyadınız *
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={`${baseInputClasses} ${fieldErrors.name ? "border-red-300 focus-visible:ring-red-400/70" : ""}`}
                    value={formData.name}
                    onChange={handleFieldChange("name")}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    required
                  />
                  {fieldErrors.name && (
                    <p
                      id="name-error"
                      className="text-sm text-red-500"
                      role="alert"
                    >
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    E-posta Adresiniz
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={`${baseInputClasses} ${fieldErrors.email ? "border-red-300 focus-visible:ring-red-400/70" : ""}`}
                    value={formData.email}
                    onChange={handleFieldChange("email")}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                  />
                  {fieldErrors.email && (
                    <p
                      id="email-error"
                      className="text-sm text-red-500"
                      role="alert"
                    >
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Telefon Numaranız *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="^[0-9+ ]+$"
                    className={`${baseInputClasses} ${fieldErrors.phone ? "border-red-300 focus-visible:ring-red-400/70" : ""}`}
                    value={formData.phone}
                    onChange={handleFieldChange("phone")}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                    required
                  />
                  {fieldErrors.phone && (
                    <p
                      id="phone-error"
                      className="text-sm text-red-500"
                      role="alert"
                    >
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Not / Mesaj
                  </label>
                  <p className="text-xs text-slate-500">
                    Kısaca belirtmek isterseniz not ekleyebilirsiniz. (Opsiyonel)
                  </p>
                  <textarea
                    id="message"
                    rows={4}
                    className={`${baseInputClasses} resize-none`}
                    value={formData.message}
                    onChange={handleFieldChange("message")}
                    aria-invalid={false}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-6 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.25)] transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-90 hover:shadow-[0_30px_70px_rgba(56,75,112,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Gönderiliyor...
                    </span>
                  ) : (
                    "Randevu Talep Et"
                  )}
                </button>

                <div className="text-center text-sm text-slate-500">
                  veya{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#384B70] underline-offset-4 transition hover:text-[#D7C3A3] hover:underline"
                  >
                    WhatsApp üzerinden yazın
                  </a>
                </div>

                {serverMessage && (
                  <p
                    className={`rounded-2xl px-4 py-3 text-sm ${status === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}
                    role={status === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    {serverMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastAppointment;
