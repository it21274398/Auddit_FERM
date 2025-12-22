import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
  Avatar,
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Business,
  TrendingUp,
  Star,
  CheckCircle,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ClientsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  // Client data with logos, industries, and testimonials
  const clients = [
    {
      name: "ABC Holdings (Pvt) Ltd",
      logo: "/clients/abc-holdings.svg",
      industry: "Financial Services",
      duration: "Partner since 2015",
      testimonial: "SML transformed our audit processes with their precision and attention to detail.",
      color: "#4CD964",
    },
    {
      name: "GreenTech Lanka (Pvt) Ltd",
      logo: "/clients/greentech.svg",
      industry: "Renewable Energy",
      duration: "Partner since 2018",
      testimonial: "Their tax advisory services helped us optimize our financial structure.",
      color: "#2ECC71",
    },
    {
      name: "Prime Logistics Solutions",
      logo: "/clients/prime-logistics.svg",
      industry: "Logistics & Supply Chain",
      duration: "Partner since 2016",
      testimonial: "Reliable accounting support that scales with our growing operations.",
      color: "#4A90E2",
    },
    {
      name: "Urban Developers Group",
      logo: "/clients/urban-developers.svg",
      industry: "Real Estate & Construction",
      duration: "Partner since 2019",
      testimonial: "Exceptional compliance guidance through complex regulatory changes.",
      color: "#9B59B6",
    },
    {
      name: "Silverline Trading Co.",
      logo: "/clients/silverline.svg",
      industry: "Import/Export",
      duration: "Partner since 2017",
      testimonial: "Strategic business consulting that delivered measurable ROI.",
      color: "#E74C3C",
    },
    {
      name: "NextGen IT Services",
      logo: "/clients/nextgen-it.svg",
      industry: "Technology & IT",
      duration: "Partner since 2020",
      testimonial: "Their IT advisory helped us streamline operations and reduce costs.",
      color: "#3498DB",
    },
    {
      name: "MediCare Hospitals",
      logo: "/clients/medicare.svg",
      industry: "Healthcare",
      duration: "Partner since 2021",
      testimonial: "Professional audit services that ensure compliance and transparency.",
      color: "#1ABC9C",
    },
    {
      name: "EduFuture Academy",
      logo: "/clients/edufuture.svg",
      industry: "Education",
      duration: "Partner since 2022",
      testimonial: "Tailored financial solutions that support our educational mission.",
      color: "#F39C12",
    },
  ];

  // Industry statistics
  const industryStats = [
    { label: "Financial Services", value: "28%" },
    { label: "Technology", value: "22%" },
    { label: "Manufacturing", value: "18%" },
    { label: "Healthcare", value: "15%" },
    { label: "Retail & Trade", value: "12%" },
    { label: "Other Sectors", value: "5%" },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <Box
      id="clients"
      sx={{
        position: "relative",
        py: { xs: 5, md: 10 },
        background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
      }}

    >
      <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            fontSize: { xs: "2.5rem", md: "3.25rem" },
            mb: 3,
            background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}
        >
          Clients Who Trust Us
        </Typography>
      </Box>
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "300px",
          background: "linear-gradient(135deg, rgba(76, 217, 100, 0.03) 0%, rgba(74, 144, 226, 0.03) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
        }}
      />

      <Container maxWidth="lg">

        {/* Featured Client Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ position: "relative", mb: 10 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={4}
                  alignItems="center"
                >
                  {/* Client Logo & Info */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: `${clients[activeIndex].color}08`,
                      border: `1px solid ${clients[activeIndex].color}20`,
                    }}
                  >
                    <Avatar
                      src={clients[activeIndex].logo}
                      alt={clients[activeIndex].name}
                      sx={{
                        width: 100,
                        height: 100,
                        mb: 3,
                        backgroundColor: "white",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Business sx={{ fontSize: 40, color: clients[activeIndex].color }} />
                    </Avatar>

                    <Typography variant="h5" fontWeight={800} mb={1}>
                      {clients[activeIndex].name}
                    </Typography>
                    <Typography color="text.secondary" mb={2}>
                      {clients[activeIndex].industry}
                    </Typography>
                    <Chip
                      label={clients[activeIndex].duration}
                      size="small"
                      sx={{
                        backgroundColor: `${clients[activeIndex].color}15`,
                        color: clients[activeIndex].color,
                        fontWeight: 600,
                      }}
                    />

                    {/* Rating */}
                    <Stack direction="row" spacing={0.5} mt={3}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} sx={{ color: "#FFD700", fontSize: 20 }} />
                      ))}
                    </Stack>
                  </Box>

                  {/* Testimonial */}
                  <Box sx={{ flex: 2, position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: -20,
                        left: -20,
                        fontSize: "5rem",
                        color: `${clients[activeIndex].color}15`,
                        fontFamily: "Georgia, serif",
                        lineHeight: 1,
                      }}
                    >
                      "
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight={500}
                      sx={{
                        fontStyle: "italic",
                        lineHeight: 1.8,
                        mb: 3,
                        color: "text.primary",
                        pl: 3,
                      }}
                    >
                      {clients[activeIndex].testimonial}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
                      <Typography variant="body1" color="text.secondary" fontWeight={500}>
                        Verified Client Testimonial
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                boxShadow: 3,
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                boxShadow: 3,
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <ArrowForward />
            </IconButton>

            {/* Carousel Indicators */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}>
              {clients.slice(0, 6).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: index === activeIndex ? "primary.main" : "rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: index === activeIndex ? "primary.main" : "rgba(0,0,0,0.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box mb={10}>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              mb={4}
              sx={{
                background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Client Portfolio
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {clients.map((client, index) => (
                <Card
                  key={client.name}
                  sx={{
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.05)",
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
                      borderColor: client.color,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 140,
                    }}
                  >
                    <Avatar
                      src={client.logo}
                      alt={client.name}
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 2,
                        backgroundColor: "white",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <Business sx={{ fontSize: 32, color: client.color }} />
                    </Avatar>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      textAlign="center"
                      color="text.primary"
                    >
                      {client.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </motion.div>

        
      </Container>
    </Box>
  );
};

export default ClientsSection;