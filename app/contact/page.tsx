import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Stallion Auto Parts"
        description="Start with a quote request, RFQ, or export capability discussion."
        imageSrc="/images/stallion-entrance.png"
        imageLegend="Lucknow Manufacturing Base"
      />

      <section className="section-space">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <div className="mt-6 space-y-5 text-slate-700">
              <div>
                <div className="text-sm text-slate-500">Company</div>
                <div className="font-medium">Stallion Auto Parts Pvt. Ltd.</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Address</div>
                <div>{siteConfig.address}</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Phone</div>
                <div>{siteConfig.phone}</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Contact Person</div>
                <div>{siteConfig.contactPerson}</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold">Inquiry Form</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Share your requirement and the team will respond with the next
              steps, capability fit, or quotation details.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
