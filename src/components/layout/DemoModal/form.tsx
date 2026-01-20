"use client";
import { useForm } from "@tanstack/react-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { industrySectors, jobTitles, solutions } from "./data";

const createDemoFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t("form.required")),
    email: z.email(t("form.required")),
    phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, t("form.phone")),
    jobTitle: z.string().min(1, t("form.required")),
    industrySector: z.string().min(1, t("form.required")),
    solution: z.string().min(1, t("form.required")),
  });

type DemoFormData = z.infer<ReturnType<typeof createDemoFormSchema>>;

interface DemoFormProps {
  onSuccess?: () => void;
}

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const i18n = useTranslations();
  const demoFormSchema = createDemoFormSchema(i18n);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      industrySector: "",
      solution: "",
    } as DemoFormData,
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert(i18n("form.submitted"));
      onSuccess?.();
    },
    validators: {
      onSubmit: demoFormSchema,
    },
  });

  return (
    <form
      id="modalDemoForm"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex w-full flex-col gap-y-3">
        <form.Field name="name">
          {(field) => (
            <fieldset
              className="flex w-full flex-col gap-1 sm:w-auto"
              data-cid="input-field"
            >
              <div className="group relative w-full">
                <input
                  className={`rounded-[2px] p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 ${
                    field.state.meta.errors.length > 0
                      ? "outline-red-500"
                      : "outline-slate-400"
                  }`}
                  id="name-modal-form"
                  placeholder={i18n("demo-modal.name")}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </div>
              {field.state.meta.errors.length > 0 && (
                <span className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </span>
              )}
            </fieldset>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <fieldset
              className="flex w-full flex-col gap-1 sm:w-auto"
              data-cid="input-field"
            >
              <div className="group relative w-full">
                <input
                  className={`rounded-[2px] p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 ${
                    field.state.meta.errors.length > 0
                      ? "outline-red-500"
                      : "outline-slate-400"
                  }`}
                  id="email-modal-form"
                  placeholder={i18n("demo-modal.email")}
                  type="email"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </div>
              {field.state.meta.errors.length > 0 && (
                <span className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </span>
              )}
            </fieldset>
          )}
        </form.Field>

        <section className="flex w-full flex-col gap-3 sm:flex-row">
          <form.Field name="phone">
            {(field) => (
              <fieldset
                className="default-fieldset flex w-full flex-col gap-1 primary"
                data-cid="phone-number"
              >
                <div className="relative">
                  <input
                    className={`rounded-[2px] p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 ${
                      field.state.meta.errors.length > 0
                        ? "outline-red-500"
                        : "outline-slate-400"
                    }`}
                    id="phone-modal-form"
                    type="tel"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                </div>
                {field.state.meta.errors.length > 0 && (
                  <span className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </span>
                )}
              </fieldset>
            )}
          </form.Field>

          <form.Field name="jobTitle">
            {(field) => (
              <div className="relative mx-auto flex w-full flex-col gap-1">
                <div className="flex w-full">
                  <div className="w-full relative">
                    <select
                      className={`min-w-full w-full rounded-[2px] outline outline-1 hover:outline-slate-700 bg-white p-3 text-body-md focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 appearance-none cursor-pointer ${
                        field.state.value ? "text-slate-700" : "text-slate-500"
                      } ${field.state.meta.errors.length > 0 ? "outline-red-500" : "outline-slate-400"}`}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    >
                      <option value="" disabled>
                        {i18n("demo-modal.jobTitle.placeholder")}
                      </option>
                      {jobTitles.map((jobTitle) => (
                        <option key={jobTitle} value={jobTitle}>
                          {i18n(jobTitle)}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 22 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-transform"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                {field.state.meta.errors.length > 0 && (
                  <span className="text-red-500 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </span>
                )}
              </div>
            )}
          </form.Field>
        </section>

        <form.Field name="industrySector">
          {(field) => (
            <div className="relative mx-auto flex w-full flex-col gap-1">
              <div className="flex w-full">
                <div className="w-full relative">
                  <select
                    className={`min-w-full w-full rounded-[2px] outline outline-1 hover:outline-slate-700 bg-white p-3 text-body-md focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 appearance-none cursor-pointer ${
                      field.state.value ? "text-slate-700" : "text-slate-500"
                    } ${field.state.meta.errors.length > 0 ? "outline-red-500" : "outline-slate-400"}`}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  >
                    <option value="" disabled>
                      {i18n("demo-modal.industrySector.placeholder")}
                    </option>
                    {industrySectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {i18n(sector)}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 22 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              {field.state.meta.errors.length > 0 && (
                <span className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </span>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="solution">
          {(field) => (
            <fieldset
              className="flex w-full flex-col gap-1"
              data-cid="select-input"
            >
              <div className="relative">
                <select
                  className={`block w-full cursor-pointer appearance-none rounded-[2px] p-3 text-body-md outline ring-0 w-full bg-white outline-1 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 ${
                    field.state.value ? "text-slate-700" : "text-slate-500"
                  } ${field.state.meta.errors.length > 0 ? "outline-red-500" : "outline-slate-400"}`}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                >
                  <option value="" disabled>
                    {i18n("demo-modal.solution.placeholder")}
                  </option>
                  {solutions.map((solution) => (
                    <option key={solution} value={solution}>
                      {i18n(solution)}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 22 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              {field.state.meta.errors.length > 0 && (
                <span className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </span>
              )}
            </fieldset>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              className="max-w-fit rounded-[2px] w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center text-[18px] font-medium text-body-lg leading-[22px] lg:leading-6 px-6 py-3 bg-[#16a34a] text-white hover:bg-green-900 active:bg-green-950 disabled:bg-slate-300 min-w-full mb-4"
              type="submit"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting
                ? i18n("demo-modal.submitting")
                : i18n("demo-modal.submit")}
            </button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}
