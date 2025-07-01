
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans vos projets d'investissement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-300">
                      25 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Téléphone</h3>
                    <p className="text-gray-300">+33 1 42 56 78 90</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">contact@valoris-securities.fr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Horaires</h3>
                    <p className="text-gray-300">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi : 9h00 - 12h00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Devenir client</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom" className="text-white">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nom" className="text-white">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telephone" className="text-white">Téléphone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <Label htmlFor="sujet" className="text-white">Sujet</Label>
                  <Input
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-[120px]"
                    placeholder="Décrivez votre projet d'investissement..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
