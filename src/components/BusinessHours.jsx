import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AccessTime, CheckCircle, Cancel } from "@mui/icons-material";
import { motion } from "framer-motion";

const schedule = [
  { day: "Monday", time: "8:00 AM – 5:00 PM", open: true, peak: "9AM–12PM" },
  { day: "Tuesday", time: "8:00 AM – 5:00 PM", open: true, peak: "9AM–12PM" },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM", open: true, peak: "9AM–12PM" },
  { day: "Thursday", time: "8:00 AM – 5:00 PM", open: true, peak: "2PM–5PM" },
  { day: "Friday", time: "8:00 AM – 5:00 PM", open: true, peak: "9AM–12PM" },
  { day: "Saturday", time: "Closed", open: false },
  { day: "Sunday", time: "Closed", open: false },
];

const BusinessHours = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="clients"
      sx={{
        position: "relative",
        py: { xs: 4, md: 10 },
        background:
          "linear-gradient(to bottom, #a6ffa64e 0%, #ffffffff 50%, #a6ffa64e 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          width: "100%",
          maxWidth: 1100,
          px: { xs: 2, sm: 3 },
          pb: 5,
          mx: "auto",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(76, 217, 100, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)",
              px: { xs: 2, md: 3 },
              py: 2.5,
              borderRadius: "12px 12px 0 0",
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "1px solid rgba(76, 217, 100, 0.2)",
              borderBottom: "none",
              backdropFilter: "blur(8px)",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                boxShadow: "0 4px 12px rgba(76, 217, 100, 0.3)",
              }}
            >
              <AccessTime sx={{ fontSize: 22 }} />
            </Box>

            <Typography variant="h6" fontWeight={800}>
              Business Hours
            </Typography>
          </Box>
        </motion.div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: "0 0 12px 12px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderTop: "none",
              overflowX: "auto",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
              background:
                "linear-gradient(to bottom, #FFFFFF 0%, #FAFBFC 100%)",
            }}
          >
            <Table size={isMobile ? "small" : "medium"}>
              <TableBody>
                {schedule.map((row, index) => (
                  <motion.tr
                    key={row.day}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + 0.2,
                    }}
                  >
                    {/* DAY */}
                    <TableCell
                      sx={{
                        py: { xs: 2, md: 2.8 },
                        fontWeight: 700,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        borderBottom:
                          index === schedule.length - 1
                            ? "none"
                            : "1px solid rgba(0,0,0,0.05)",
                        backgroundColor:
                          index % 2 === 0
                            ? "rgba(0,0,0,0.008)"
                            : "transparent",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexWrap: "wrap",
                        }}
                      >
                        {row.open ? (
                          <CheckCircle
                            sx={{ color: "success.main", fontSize: 20 }}
                          />
                        ) : (
                          <Cancel
                            sx={{ color: "error.main", fontSize: 20 }}
                          />
                        )}

                        <Typography fontWeight={600}>
                          {row.day}
                        </Typography>

                        {row.peak && !isMobile && (
                          <Chip
                            label={`Peak: ${row.peak}`}
                            size="small"
                            sx={{
                              height: 24,
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              backgroundColor:
                                "rgba(76, 217, 100, 0.12)",
                              color: "primary.main",
                            }}
                          />
                        )}
                      </Box>
                    </TableCell>

                    {/* TIME */}
                    <TableCell
                      align="right"
                      sx={{
                        py: { xs: 2, md: 2.8 },
                        fontWeight: 700,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: row.open
                          ? "text.primary"
                          : "error.main",
                        borderBottom:
                          index === schedule.length - 1
                            ? "none"
                            : "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      {row.time}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BusinessHours;
