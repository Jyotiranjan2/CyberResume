import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { certificates } from "@/data/certificates";

export default function CertificateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenCertificate = (event: CustomEvent) => {
      setSelectedCertId(event.detail);
      setIsOpen(true);
    };

    window.addEventListener('openCertificate', handleOpenCertificate as EventListener);
    
    return () => {
      window.removeEventListener('openCertificate', handleOpenCertificate as EventListener);
    };
  }, []);

  const selectedCert = certificates.find(cert => cert.id === selectedCertId);

  if (!selectedCert) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-secondary border border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {selectedCert.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-primary mb-2">Description</h4>
            <p className="text-muted-foreground">{selectedCert.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-accent mb-2">Issuer</h4>
              <p className="text-muted-foreground">{selectedCert.issuer}</p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-cyber-purple mb-2">Date</h4>
              <p className="text-muted-foreground">{selectedCert.date}</p>
            </div>
          </div>
          
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-cyber-yellow mb-2">Skills Demonstrated</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCert.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-muted text-foreground px-3 py-1 rounded-full text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            data-testid="button-close-modal"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
