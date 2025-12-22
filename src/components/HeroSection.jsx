import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward, CheckCircle } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #a6ffa64e 0%, #b8dfb84e 50%, #a6ffa64e 100%)",
        pt: { xs: 12, md: 10 },
        pb: { xs: 10, md: 15 },
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(76, 217, 100, 0.08) 0%, rgba(76, 217, 100, 0) 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, rgba(74, 144, 226, 0) 70%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              

              {/* Main Headline */}
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #263238 0%, #4A90E2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Precision Accounting & Strategic Business Solutions
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="h5"
                fontWeight={500}
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  opacity: 0.9,
                }}
              >
                Elevating Financial Clarity & Compliance Since year
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 550,
                }}
              >
                At <strong>SML Business Solutions</strong>, we provide comprehensive audit, tax advisory, 
                and financial consulting services that empower organizations to achieve regulatory 
                compliance, optimize operations, and drive sustainable growth.
              </Typography>

              {/* Key Points */}
              <Stack spacing={1.5} mb={5}>
                {[ "Real-time Financial Insights","Book Keeping", "Risk Assessment & Mitigation","Trusted by 180+ Businesses"].map(
                  (item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={1.5}>
                      <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
                      <Typography variant="body1" color="text.primary">
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Stack>

              {/* CTA Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="flex-start">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      px: 5,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: "1rem",
                      fontWeight: 600,
                      boxShadow: "0 8px 24px rgba(76, 217, 100, 0.3)",
                      "&:hover": {
                        boxShadow: "0 12px 32px rgba(76, 217, 100, 0.4)",
                      },
                    }}
                    onClick={() =>
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Our Services
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        backgroundColor: "rgba(74, 144, 226, 0.04)",
                      },
                    }}
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contact us
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

        </Grid>
      </Container>

      
    </Box>
  );
};

export default HeroSection;