"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Calendar,
  TrendingUp,
  Brain,
  Star,
  Github,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  FadeIn,
  SlideInOnScroll,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  ScaleOnHover,
} from "@/components/animations";

export default function HabitMateLanding() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Registra hábitos fácilmente",
      description:
        "Añade y gestiona tus hábitos diarios con una interfaz intuitiva y sin complicaciones.",
    },
    {
      icon: TrendingUp,
      title: "Visualiza tu progreso diario",
      description:
        "Observa tu evolución con gráficos claros y estadísticas que te motivan a continuar.",
    },
    {
      icon: Brain,
      title: "Obtén sugerencias de hábitos con IA",
      description:
        "Recibe recomendaciones personalizadas basadas en tus objetivos y patrones de comportamiento.",
    },
  ];

  const mockHabits = [
    {
      name: "Beber 8 vasos de agua",
      streak: 7,
      completed: [true, true, true, true, true, true, true],
    },
    {
      name: "Ejercicio 30 min",
      streak: 5,
      completed: [true, true, false, true, true, true, true],
    },
    {
      name: "Leer 20 páginas",
      streak: 12,
      completed: [true, true, true, true, true, false, true],
    },
    {
      name: "Meditar 10 min",
      streak: 3,
      completed: [false, true, true, true, false, true, true],
    },
  ];

  const days = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingElement className="absolute top-20 left-10">
          <div className="w-32 h-32 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-1/4">
          <div className="w-40 h-40 bg-gradient-to-r from-blue-200/20 to-green-200/20 rounded-full blur-2xl"></div>
        </FloatingElement>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        {...({
          className: "container mx-auto px-4 py-4 md:py-6 relative z-10",
        } as HTMLMotionProps<"header">)}
      >
        <nav className="flex items-center justify-between">
          <motion.div
            {...({
              className: "flex items-center space-x-2",
            } as HTMLMotionProps<"div">)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              {...({
                className:
                  "w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center",
              } as HTMLMotionProps<"div">)}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Calendar className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </motion.div>
            <span className="text-lg md:text-xl font-bold text-gray-800">
              HabitMate
            </span>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                <Link href="/dashboard">Demo</Link>
              </Button>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="#beneficios"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Beneficios
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                Iniciar sesión
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100 text-xs md:text-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Nuevo: Sugerencias con IA
                </Badge>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Crea hábitos{" "}
                <motion.span
                  {...({
                    className:
                      "bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent",
                  } as HTMLMotionProps<"span">)}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  duraderos
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
                Sigue tu progreso, mantente enfocado y mejora cada día con
                HabitMate. La aplicación que convierte tus objetivos en rutinas
                exitosas.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Empezar ahora
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-3"
                  >
                    <Link href="/dashboard">Probar demo</Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1} direction="right" className="order-1 lg:order-2">
            <div className="relative px-4 sm:px-0">
              <motion.div
                {...({ className: "relative z-10" } as HTMLMotionProps<"div">)}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="HabitMate App Preview"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none"
                />
              </motion.div>
              <motion.div
                {...({
                  className:
                    "absolute -top-4 -right-4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-green-200 to-blue-200 rounded-full blur-3xl opacity-30",
                } as HTMLMotionProps<"div">)}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              ></motion.div>
              <motion.div
                {...({
                  className:
                    "absolute -bottom-4 -left-4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30",
                } as HTMLMotionProps<"div">)}
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              ></motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="beneficios"
        className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10"
      >
        <SlideInOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir HabitMate?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Diseñado para hacer que el desarrollo de hábitos sea simple,
              visual y efectivo
            </p>
          </div>
        </SlideInOnScroll>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full group">
                  <CardHeader className="pb-4">
                    <motion.div
                      {...({
                        className:
                          "w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
                      } as HTMLMotionProps<"div">)}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg md:text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* App Preview Section */}
      <section
        id="demo"
        className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10"
      >
        <SlideInOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tu progreso, siempre visible
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Visualiza tus hábitos de forma clara y mantente motivado con cada
              logro
            </p>
          </div>
        </SlideInOnScroll>

        <SlideInOnScroll delay={0.3}>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <motion.div
                  {...({
                    className:
                      "bg-gradient-to-r from-green-500 to-blue-500 text-white",
                  } as HTMLMotionProps<"div">)}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl">
                      Dashboard de Hábitos
                    </CardTitle>
                    <CardDescription className="text-green-100 text-sm md:text-base">
                      Semana del 18 - 24 de Marzo
                    </CardDescription>
                  </CardHeader>
                </motion.div>
                <CardContent className="p-4 md:p-6">
                  <StaggerContainer className="space-y-3 md:space-y-4">
                    {mockHabits.map((habit, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          {...({
                            className:
                              "flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                          } as HTMLMotionProps<"div">)}
                          whileHover={{ x: 5, backgroundColor: "#f0fdf4" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center space-x-3 md:space-x-4 mb-3 sm:mb-0">
                            <div className="flex items-center space-x-2">
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                              </motion.div>
                              <span className="font-medium text-gray-900 text-sm md:text-base">
                                {habit.name}
                              </span>
                            </div>
                          </div>

                          {/* Days grid - responsive */}
                          <div className="flex items-center space-x-1 md:space-x-2">
                            <div className="flex space-x-1 md:space-x-2">
                              {days.map((day, dayIndex) => (
                                <div
                                  key={dayIndex}
                                  className="flex flex-col items-center space-y-1"
                                >
                                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                                    {day}
                                  </span>
                                  <motion.div
                                    {...({
                                      className: `w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                                        habit.completed[dayIndex]
                                          ? "bg-green-500 text-white"
                                          : "bg-gray-200 text-gray-500"
                                      }`,
                                    } as HTMLMotionProps<"div">)}
                                    whileHover={{ scale: 1.1 }}
                                    animate={
                                      habit.completed[dayIndex]
                                        ? {
                                            boxShadow: [
                                              "0 0 0px rgba(34, 197, 94, 0.5)",
                                              "0 0 20px rgba(34, 197, 94, 0.3)",
                                              "0 0 0px rgba(34, 197, 94, 0.5)",
                                            ],
                                          }
                                        : {}
                                    }
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                    }}
                                  >
                                    {habit.completed[dayIndex] ? "✓" : "○"}
                                  </motion.div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </SlideInOnScroll>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <SlideInOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-r from-green-500 to-blue-500 text-white overflow-hidden">
                <CardContent className="p-12 relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Star className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
                  </motion.div>
                  <motion.blockquote
                    {...({
                      className:
                        "text-2xl md:text-3xl font-light italic mb-6 leading-relaxed",
                    } as HTMLMotionProps<"blockquote">)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    &ldquo;El secreto del éxito está en la constancia. Cada
                    pequeño paso cuenta, cada día importa.&rdquo;
                  </motion.blockquote>
                  <motion.p
                    {...({
                      className: "text-green-100 text-lg",
                    } as HTMLMotionProps<"p">)}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    — Filosofía HabitMate
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </SlideInOnScroll>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <SlideInOnScroll>
          <motion.div
            {...({
              className:
                "text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl",
            } as HTMLMotionProps<"div">)}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu vida?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya están construyendo mejores
              hábitos con HabitMate
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Comenzar gratis
              </Button>
            </motion.div>
          </motion.div>
        </SlideInOnScroll>
      </section>

      {/* Footer */}
      <SlideInOnScroll>
        <footer className="container mx-auto px-4 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              {...({
                className: "flex items-center space-x-2",
              } as HTMLMotionProps<"div">)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                {...({
                  className:
                    "w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center",
                } as HTMLMotionProps<"div">)}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-gray-800">HabitMate</span>
            </motion.div>

            <div className="text-center">
              <p className="text-gray-600 flex items-center justify-center">
                Hecho con{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-4 h-4 mx-1 text-red-500" />
                </motion.span>
                para ayudarte a crecer
              </p>
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contacto</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            {...({
              className:
                "mt-8 pt-8 border-t border-gray-200 text-center text-gray-500",
            } as HTMLMotionProps<"div">)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>&copy; 2024 HabitMate. Todos los derechos reservados.</p>
          </motion.div>
        </footer>
      </SlideInOnScroll>
    </div>
  );
}
