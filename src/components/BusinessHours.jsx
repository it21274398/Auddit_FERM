import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Chip,
  useTheme,
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

  return (
    <Box sx={{ mt: 6 , width:"80%",pb:5,mx:15}}>
      {/* HEADER BAR - ENHANCED */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, rgba(76, 217, 100, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)",
            px: 3,
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
          <Box>
            <Typography variant="h6" fontWeight={800} color="text.primary">
              Business Hours
            </Typography>
           
          </Box>
        </Box>
      </motion.div>

      {/* TABLE - ENHANCED */}
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
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
            background: "linear-gradient(to bottom, #FFFFFF 0%, #FAFBFC 100%)",
          }}
        >
          <Table>
            <TableBody>
              {schedule.map((row, index) => (
                <motion.tr
                  key={row.day}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                  whileHover={{
                    backgroundColor: index % 2 === 0 ? "rgba(76, 217, 100, 0.03)" : "rgba(74, 144, 226, 0.03)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* DAY COLUMN - ENHANCED */}
                  <TableCell
                    sx={{
                      py: 2.8,
                      fontWeight: 700,
                      fontSize: "1rem",
                      borderBottom: index === schedule.length - 1 
                        ? "none" 
                        : "1px solid rgba(0,0,0,0.05)",
                      backgroundColor: index % 2 === 0 
                        ? "rgba(0,0,0,0.008)" 
                        : "transparent",
                      transition: "background-color 0.3s ease",
                      position: "relative",
                      "&::before": row.open ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        
                        backgroundColor: "primary.main",
                        borderRadius: "0 2px 2px 0",
                      } : {},
                    }}
                  >
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 2,
                      ml: row.open ? 1.5 : 0,
                    }}>
                      {row.open ? (
                        <CheckCircle sx={{ 
                          ml:-1.1,
                          color: "success.main", 
                          fontSize: 20,
                          filter: "drop-shadow(0 2px 4px rgba(76, 217, 100, 0.3))"
                        }} />
                      ) : (
                        <Cancel sx={{ 
                          color: "error.main", 
                          fontSize: 20,
                          filter: "drop-shadow(0 2px 4px rgba(244, 67, 54, 0.3))"
                        }} />
                      )}
                      <Typography variant="body1" fontWeight={600}>
                        {row.day}
                      </Typography>

                      {row.peak && (
                        <Chip
                          label={`Peak: ${row.peak}`}
                          size="small"
                          sx={{
                            ml: 1,
                            height: 24,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            backgroundColor: "rgba(76, 217, 100, 0.12)",
                            color: "primary.main",
                            border: "1px solid rgba(76, 217, 100, 0.2)",
                            boxShadow: "0 2px 6px rgba(76, 217, 100, 0.15)",
                          }}
                        />
                      )}
                    </Box>
                  </TableCell>

                  {/* TIME COLUMN - ENHANCED */}
                  <TableCell
                    align="right"
                    sx={{
                      py: 2.8,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: row.open ? "text.primary" : "error.main",
                      borderBottom: index === schedule.length - 1 
                        ? "none" 
                        : "1px solid rgba(0,0,0,0.05)",
                      backgroundColor: index % 2 === 0 
                        ? "rgba(0,0,0,0.008)" 
                        : "transparent",
                      transition: "background-color 0.3s ease",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ 
                      display: "inline-flex", 
                      alignItems: "center",
                      gap: 1,
                      position: "relative",
                      zIndex: 2,
                    }}>
                      {row.time}
                      {!row.open && (
                        <Cancel sx={{ 
                          color: "error.main", 
                          fontSize: 16,
                          ml: 1
                        }} />
                      )}
                    </Box>

                    {!row.open && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "15%",
                          right: "15%",
                          top: "50%",
                          height: "2px",
                          background: "linear-gradient(90deg, rgba(244, 67, 54, 0.3) 0%, rgba(244, 67, 54, 0.6) 50%, rgba(244, 67, 54, 0.3) 100%)",
                          transform: "translateY(-50%)",
                          borderRadius: "1px",
                          zIndex: 1,
                        }}
                      />
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>

      
    </Box>
  );
};

export default BusinessHours;