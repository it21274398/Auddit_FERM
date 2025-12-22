import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Phone,
  LocationOn,
  Email,
  Schedule,
  ArrowForward,
  LinkedIn,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
      background: "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `radial-gradient(${theme.palette.primary.main}08 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />

      {/* SECTION HEADER */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center">
            
            
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
              Connect With Our Experts
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Reach out to SML Business Solutions for professional audit,
              accounting, taxation, and strategic business advisory services.
              Let's discuss how we can support your growth.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* MAP WITH OVERLAY - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            height: { xs: 500, md: 740 },
            overflow: "hidden",
            borderRadius: { xs: 0, md: 6 },
            mx: "auto",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >{/* FULL MAP - Enhanced */}
<iframe
  title="Google Map - K.T. Subasinghe & Co"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.93204141378!2d79.993!3d7.027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x47d450f846bffa0c!2sK.T.%20Subasinghe%20%26%20Co!5e0!3m2!1sen!2slk!4v1710000000000"
  style={{
    width: "100%",
    height: "100%",
    border: 0,
    filter: "saturate(1.2) contrast(1.1)",
  }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          {/* RIGHT BLUR OVERLAY - Enhanced */}
          <Box
  sx={{
    position: "absolute",
    top: 0,
    right: 0,

    // ✅ ONLY right side
    width: { xs: "100%", md: "40%" },
    height: "100%",

    // ✅ blur only inside this box
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",

    // ✅ gradient: transparent → frosted glass
    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%)",

    display: "flex",
    alignItems: "center",

    // optional depth
    boxShadow: "-20px 0 60px rgba(0, 0, 0, 0.1)",
  }}
>

            {/* CONTACT CONTENT - Enhanced */}
            <Box sx={{ px: { xs: 4, md: 6 }, width: "100%"}}>
              <Typography
                variant="h4"
                fontWeight={800}
                gutterBottom
                sx={{
                  background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                Contact Information
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 4 }}>
                We're here to help you with all your business needs
              </Typography>

              {/* CONTACT ITEMS - Enhanced */}
              <Box sx={{ mb: 4 }}>
                {/* PHONE */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(76, 217, 100, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(76, 217, 100, 0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "rgba(76, 217, 100, 0.1)",
                      color: "primary.main",
                      mr: 3,
                    }}
                  >
                    <Phone />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      PHONE
                    </Typography>
                    <Link
                      href="tel:+94112925437"
                      color="text.primary"
                      underline="none"
                      sx={{
                        display: "block",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      +94 112 925 437
                    </Link>
                  </Box>
                </Box>

                

                {/* EMAIL */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(74, 144, 226, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(74, 144, 226, 0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "rgba(74, 144, 226, 0.1)",
                      color: "secondary.main",
                      mr: 3,
                    }}
                  >
                    <Email />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      EMAIL
                    </Typography>
                    <Link
                      href="mailto:contact@smlbusiness.com"
                      color="text.primary"
                      underline="none"
                      sx={{
                        display: "block",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        "&:hover": { color: "secondary.main" },
                      }}
                    >
                      contact@smlbusiness.com
                    </Link>
                  </Box>
                </Box>

                {/* ADDRESS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(155, 89, 182, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(155, 89, 182, 0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "rgba(155, 89, 182, 0.1)",
                      color: "#9B59B6",
                      mr: 3,
                      mt: 0.5,
                    }}
                  >
                    <LocationOn />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      ADDRESS
                    </Typography>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.5 }}>
                      No. XX, Sample Road,
                      <br />
                      Kadawatha,
                      <br />
                      Sri Lanka
                    </Typography>
                  </Box>
                </Box>
              </Box>

         

              {/* SOCIAL ICONS - Enhanced */}
              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                  Connect With Us
                </Typography>
                <Box display="flex" gap={1}>
                  {[
                    { icon: <Facebook />, color: "#1877F2", href: "https://facebook.com/" },
                    { icon:  <WhatsApp />, color: "#50e440ff",  href:"https://wa.me/94112925437" },
                  
                  ].map((social, idx) => (
                    <IconButton
                      key={idx}
                      component="a"
                      href={social.href}
                      target="_blank"
                      sx={{
                        backgroundColor: "white",
                        color: social.color,
                        border: "1px solid rgba(0,0,0,0.1)",
                        "&:hover": {
                          backgroundColor: social.color,
                          color: "white",
                          transform: "translateY(-3px)",
                          boxShadow: `0 5px 20px ${social.color}40`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* CTA BUTTON */}
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: "0 8px 24px rgba(76, 217, 100, 0.3)",
                    "&:hover": {
                      boxShadow: "0 12px 32px rgba(76, 217, 100, 0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                  href="tel:+94112925437"
                >
                  Call Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

     
    </Box>
  );
};

export default ContactSection;