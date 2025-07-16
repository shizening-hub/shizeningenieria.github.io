"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Cpu,
  Home,
  Factory,
  Stethoscope,
  Sprout,
  Eye,
  Monitor,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Target,
  Users,
} from "lucide-react"

export default function ShizenWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo-shizen.jpeg" alt="Shizen Ingeniería S.A.S." className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Nosotros
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Servicios
              </Link>
              <Link href="#aplicaciones" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Aplicaciones
              </Link>
              <Link href="#experiencia" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Experiencia
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#025f02] transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#inicio"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Inicio
                </Link>
                <Link
                  href="#nosotros"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Nosotros
                </Link>
                <Link
                  href="#servicios"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Servicios
                </Link>
                <Link
                  href="#aplicaciones"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Aplicaciones
                </Link>
                <Link
                  href="#experiencia"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Experiencia
                </Link>
                <Link
                  href="#contacto"
                  className="text-gray-700 hover:text-[#025f02] transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-[#025f02] to-[#034a02] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-green-300">Innovación Natural</span> en{" "}
              <span className="text-green-300">Soluciones Digitales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Desarrollamos ecosistemas tecnológicos IoT e IA que conectan la naturaleza con la innovación digital para
              transformar tu organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#025f02] hover:bg-green-50">
                Conoce nuestros servicios
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#025f02] bg-transparent"
              >
                Ver proyectos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eslogan Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#025f02] mb-6">
              Innovación Natural en Soluciones Digitales
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              En Shizen creemos que la tecnología más avanzada debe inspirarse en la naturaleza. Desarrollamos
              soluciones IoT e inteligencia artificial que crecen y se adaptan orgánicamente a las necesidades de tu
              organización, creando ecosistemas digitales sostenibles y eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Shizen Ingeniería</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos una empresa especializada en el desarrollo de soluciones IoT, sistemas automáticos y servicios de
                I+D+i
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-[#025f02]">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#025f02] mb-4" />
                  <CardTitle className="text-[#025f02]">Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Desarrollar soluciones tecnológicas innovadoras basadas en IoT e inteligencia artificial que
                    optimicen procesos y mejoren la calidad de vida de nuestros clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#025f02]">
                <CardHeader>
                  <Eye className="w-12 h-12 text-[#025f02] mb-4" />
                  <CardTitle className="text-[#025f02]">Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ser líderes en Colombia en el desarrollo de ecosistemas tecnológicos inteligentes, contribuyendo a
                    la transformación digital de organizaciones en diversos sectores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#025f02]">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#025f02] mb-4" />
                  <CardTitle className="text-[#025f02]">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Innovación, calidad, confiabilidad y compromiso con el desarrollo sostenible a través de la
                    tecnología.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600">Soluciones tecnológicas especializadas para tu organización</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#025f02]">Desarrollo IoT a la Medida</CardTitle>
                      <CardDescription>Soluciones personalizadas de Internet de las Cosas</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Desarrollamos ecosistemas tecnológicos que integran hardware, software y comunicación en red para
                    conectar y optimizar dispositivos y procesos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Análisis de requerimientos específicos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Implementación de sensores y actuadores</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Software de análisis y toma de decisiones</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Soluciones seguras y escalables</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#025f02]">Vigilancia Tecnológica</CardTitle>
                      <CardDescription>Monitoreo y análisis del entorno tecnológico</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Proceso sistemático de monitoreo continuo para identificar innovaciones, tendencias y desarrollos
                    relevantes en sectores específicos.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Análisis de tendencias tecnológicas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Identificación de oportunidades</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Estrategias basadas en datos reales</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Prevención de amenazas tecnológicas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="aplicaciones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aplicaciones de Nuestras Soluciones</h2>
              <p className="text-xl text-gray-600">Tecnología IoT aplicada en diversos sectores</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#025f02] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#025f02]">Hospitalarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Monitoreo de oxígeno</li>
                    <li>• Control de temperatura</li>
                    <li>• Detección de gases</li>
                    <li>• Vigilancia en tiempo real</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#025f02] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#025f02]">Industriales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Mantenimiento predictivo</li>
                    <li>• Control de procesos</li>
                    <li>• Optimización energética</li>
                    <li>• Monitoreo de maquinaria</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#025f02] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#025f02]">Agrícolas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Sensores de humedad</li>
                    <li>• Riego automatizado</li>
                    <li>• Monitoreo climático</li>
                    <li>• Gestión de cultivos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#025f02] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#025f02]">Domóticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automatización del hogar</li>
                    <li>• Sistemas de seguridad</li>
                    <li>• Control de iluminación</li>
                    <li>• Reutilización de aguas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Experiencia</h2>
              <p className="text-xl text-gray-600">Proyectos destacados y colaboraciones exitosas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#025f02]">Vigilancia Tecnológica - Universidad del Sinú</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        Diagnóstico Ocular
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Desarrollo de metodología integral para análisis y diseño de soluciones basadas en sistemas para el
                    diagnóstico asistido de patologías oculares.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Planificación estratégica</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Análisis de avances tecnológicos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Evaluación de tecnologías</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#025f02]">Suministro de Equipos - Universidad del Sinú</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        I+D+i
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Suministro de equipos de cómputo de alto rendimiento para el desarrollo de proyectos de
                    investigación, desarrollo tecnológico e innovación.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Equipos de alto rendimiento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Soporte a investigación</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#025f02] rounded-full"></div>
                      <span className="text-sm text-gray-600">Desarrollo tecnológico</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-16 bg-[#025f02] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Especialidades Tecnológicas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                Internet de las Cosas (IoT)
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                Inteligencia Artificial
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                Sistemas Automáticos
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                Domótica
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                I+D+i
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#025f02] text-lg py-2 px-4">
                Investigación y Desarrollo
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-xl text-gray-600">¿Listo para transformar tu organización con tecnología IoT?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#025f02] mb-6">Hablemos de tu proyecto</h3>
                <p className="text-gray-600 mb-8">
                  Estamos listos para desarrollar soluciones tecnológicas personalizadas que impulsen el crecimiento de
                  tu organización.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">shizeningenieria@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+57 3153611810</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#025f02] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Barranquilla, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#025f02]">Solicita una consulta</CardTitle>
                  <CardDescription>Cuéntanos sobre tu proyecto y te contactaremos pronto</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025f02]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025f02]"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025f02]"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025f02]"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-[#025f02] hover:bg-[#034a02]">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/logo-shizen.jpeg" alt="Shizen Ingeniería S.A.S." className="h-10 w-auto" />
                </div>
                <p className="text-gray-400 mb-4">
                  Innovación Natural en Soluciones Digitales. Desarrollamos soluciones tecnológicas que conectan la
                  naturaleza con la innovación digital para optimizar procesos y transformar organizaciones.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Desarrollo IoT</li>
                  <li>Vigilancia Tecnológica</li>
                  <li>Sistemas Automáticos</li>
                  <li>I+D+i</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Aplicaciones</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Hospitalarias</li>
                  <li>Industriales</li>
                  <li>Agrícolas</li>
                  <li>Domóticas</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Shizen Ingeniería S.A.S. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
