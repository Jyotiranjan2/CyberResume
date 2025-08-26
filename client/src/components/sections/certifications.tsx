import { certificates } from "@/data/certificates";

interface CertificationsProps {}

export default function Certifications({}: CertificationsProps) {
  const openCertificate = (certId: string) => {
    const event = new CustomEvent('openCertificate', { detail: certId });
    window.dispatchEvent(event);
  };

  return (
    <section id="certifications" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Industry-recognized credentials and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-hover bg-background rounded-xl p-6 border border-border cursor-pointer"
              onClick={() => openCertificate(cert.id)}
              data-testid={`certificate-${cert.id}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${cert.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${cert.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{cert.shortTitle}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {cert.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-semibold text-sm">
                  {cert.date}
                </span>
                <i className="fas fa-external-link-alt text-muted-foreground"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
