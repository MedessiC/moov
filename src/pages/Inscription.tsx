import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { forfaits, getForfaitLabel } from "@/lib/forfaits";

interface FormData {
  nom: string;
  prenom: string;
  numeroMoov: string;
  whatsapp: string;
  forfait: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  numeroMoov?: string;
  whatsapp?: string;
  forfait?: string;
}

export default function Inscription() {
  const [searchParams] = useSearchParams();
  const preselectedForfait = searchParams.get("forfait") || "";
  
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    numeroMoov: "",
    whatsapp: "",
    forfait: preselectedForfait,
  });
  
  // Check for EmailJS public key in env (used to send real emails)
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
  const isEmailJsKeySet = Boolean(publicKey);
  const [allowDemoSend, setAllowDemoSend] = useState<boolean>(false);

  // If the user arrives with a forfait param, keep the form in sync and scroll to the select
  useEffect(() => {
    if (preselectedForfait && preselectedForfait !== formData.forfait) {
      setFormData((prev) => ({ ...prev, forfait: preselectedForfait }));
      const el = document.getElementById("forfait-field");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedForfait]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validatePhone = (phone: string) => {
    // Bénin phone format: 8 digits, starts with valid prefixes
    const cleaned = phone.replace(/\s/g, "");
    return /^[0-9]{8}$/.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est requis";
    } else if (formData.prenom.trim().length < 2) {
      newErrors.prenom = "Le prénom doit contenir au moins 2 caractères";
    }
    
    if (!formData.numeroMoov.trim()) {
      newErrors.numeroMoov = "Le numéro Moov est requis";
    } else if (!validatePhone(formData.numeroMoov)) {
      newErrors.numeroMoov = "Format invalide (8 chiffres requis)";
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Le numéro WhatsApp est requis";
    } else if (!validatePhone(formData.whatsapp)) {
      newErrors.whatsapp = "Format invalide (8 chiffres requis)";
    }
    
    if (!formData.forfait) {
      newErrors.forfait = "Veuillez choisir un forfait";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - replace with your actual IDs
      // For demo purposes, we'll simulate success
      // In production, configure EmailJS with your actual service
      
      const templateParams = {
        to_email: "contact@mideessi.com",
        from_name: `${formData.prenom} ${formData.nom}`,
        numero_moov: formData.numeroMoov,
        whatsapp: formData.whatsapp,
        forfait: getForfaitLabel(formData.forfait),
        message: `Nouvelle inscription MIKPLÉ:\n\nNom: ${formData.nom}\nPrénom: ${formData.prenom}\nNuméro Moov: ${formData.numeroMoov}\nWhatsApp: ${formData.whatsapp}\nForfait: ${getForfaitLabel(formData.forfait)}`,
      };

      // Check if EmailJS is configured via env; fall back to provided IDs if not
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_g6qpvd7"; // provided service ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_7kmvovg"; // provided template ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // **keep public key in env** for security

      // Log which IDs are used (no secret output)
      console.info(`EmailJS -> service: ${serviceId}, template: ${templateId}, publicKey set: ${Boolean(publicKey)}`);

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else if (serviceId && templateId && !publicKey) {
        // Service & template are set, but public key missing — try sending without explicit public key if EmailJS SDK supports it
        // (Most EmailJS deployments require a public key; keep demo fallback)
        console.warn("EmailJS public key not set. Running demo fallback. Set VITE_EMAILJS_PUBLIC_KEY in your env to send real emails.");
        console.log("Demo mode - Form data:", templateParams);
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Demo mode - simulate API call
        console.log("Demo mode - Form data:", templateParams);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-md mx-auto text-center animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
                Demande reçue !
              </h1>
              <p className="text-muted-foreground mb-8">
                Merci <strong>{formData.prenom}</strong> ! Votre demande d'inscription au forfait 
                Moov Famille a bien été enregistrée. Notre équipe vous contactera sous 24h via WhatsApp.
              </p>
              <div className="bg-muted rounded-xl p-6 text-left mb-8">
                <h3 className="font-heading font-bold text-foreground mb-3">Récapitulatif</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Nom:</strong> {formData.nom} {formData.prenom}</li>
                  <li><strong>Numéro Moov:</strong> {formData.numeroMoov}</li>
                  <li><strong>WhatsApp:</strong> {formData.whatsapp}</li>
                  <li><strong>Forfait:</strong> {getForfaitLabel(formData.forfait)}</li>
                </ul>
              </div>
              <Button asChild variant="gold" size="lg">
                <a href="/">Retour à l'accueil</a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Rejoindre <span className="text-gold">Moov Famille</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Remplissez ce formulaire et nous vous mettrons en contact avec un groupe Moov Famille sous 24h.
            </p>
            {preselectedForfait && (
              <div className="mt-4 inline-block bg-gold/10 rounded-md px-3 py-1 text-sm text-foreground">
                Forfait sélectionné: <strong className="text-gold">{getForfaitLabel(preselectedForfait)}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">                {!isEmailJsKeySet && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <p className="text-destructive text-sm mb-2">
                      <strong>Attention :</strong> la variable d'environnement <code>VITE_EMAILJS_PUBLIC_KEY</code> n'est pas définie. Les envois EmailJS seront simulés (mode démo).
                    </p>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground">
                      <input
                        type="checkbox"
                        checked={allowDemoSend}
                        onChange={(e) => setAllowDemoSend(e.target.checked)}
                        className="accent-gold"
                      />
                      <span>J'autorise l'envoi en mode démo (simulation)</span>
                    </label>
                  </div>
                )}                {/* Nom */}
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-foreground font-medium">
                    Nom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nom"
                    type="text"
                    placeholder="Votre nom de famille"
                    value={formData.nom}
                    onChange={(e) => handleChange("nom", e.target.value)}
                    className={errors.nom ? "border-destructive" : ""}
                    maxLength={50}
                  />
                  {errors.nom && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.nom}
                    </p>
                  )}
                </div>

                {/* Prénom */}
                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-foreground font-medium">
                    Prénom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={(e) => handleChange("prenom", e.target.value)}
                    className={errors.prenom ? "border-destructive" : ""}
                    maxLength={50}
                  />
                  {errors.prenom && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.prenom}
                    </p>
                  )}
                </div>

                {/* Numéro Moov */}
                <div className="space-y-2">
                  <Label htmlFor="numeroMoov" className="text-foreground font-medium">
                    Numéro Moov <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="numeroMoov"
                    type="tel"
                    placeholder="Ex: 95 XX XX XX"
                    value={formData.numeroMoov}
                    onChange={(e) => handleChange("numeroMoov", e.target.value)}
                    className={errors.numeroMoov ? "border-destructive" : ""}
                    maxLength={15}
                  />
                  {errors.numeroMoov && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.numeroMoov}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground font-medium">
                    Numéro WhatsApp <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="Ex: 95 XX XX XX"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    className={errors.whatsapp ? "border-destructive" : ""}
                    maxLength={15}
                  />
                  {errors.whatsapp && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Forfait */}
                <div className="space-y-2">
                  <Label htmlFor="forfait" className="text-foreground font-medium">
                    Forfait souhaité <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.forfait}
                    onValueChange={(value) => handleChange("forfait", value)}
                  >
                    <SelectTrigger id="forfait-field" className={errors.forfait ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choisissez un forfait" />
                    </SelectTrigger>
                    <SelectContent>
                      {forfaits.map((forfait) => (
                        <SelectItem key={forfait.id} value={forfait.id}>
                          {forfait.name} - {forfait.perMember}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.forfait && (
                    <p className="text-destructive text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.forfait}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <p className="text-destructive text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting || (!isEmailJsKeySet && !allowDemoSend)}
                  title={!isEmailJsKeySet && !allowDemoSend ? "VITE_EMAILJS_PUBLIC_KEY est manquante — cochez 'J'autorise l'envoi en mode démo' ou ajoutez la clé dans .env" : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe MIKPLÉ 
                  concernant votre demande d'inscription Moov Famille.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
