import { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { SiteContext } from "../../context/siteContext";
import { ClickAwayListener } from "@mui/material";

const Text = styled(Typography)(() => ({
  color: "#fff",
  marginBottom: "16px",
}));

function DonatePopOver() {
  const { closeDonatePopover } = useContext(SiteContext);

  return (
    <ClickAwayListener onClickAway={closeDonatePopover}>
      <Box
        sx={{
          width: "600px",
          height: "550px",
          backgroundColor: "#8C2723",
          position: "fixed",
          top: "50%",
          left: "50%",
          marginTop: "-225px",
          marginLeft: "-300px",
        }}
      >
        <Box display="flex" justifyContent="flex-end" sx={{ padding: "12px" }}>
          <CloseIcon sx={{ color: "#fff" }} onClick={closeDonatePopover} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ padding: "48px" }}
        >
          <Text variant="h4" sx={{ fontWeight: "bold" }}>
            SUPPORT OUR MOVEMENT
          </Text>
          <Text>
            Please consider donating today to the only independent,
            educator-led, multi-racial-working-class, campaign for Public
            Education in California and the Country.
          </Text>
          <Text>
            We are not powered by either Democrats or Republicans. We are
            definitely not funded by millionaires and billionaires. We are run
            and supported by people like you.
          </Text>
          <Text>
            Anything helps and goes a long way to “putting the public back into
            public education.
          </Text>
          <Text>Muchas Gracias,</Text>
          <Text>The Campaign Team</Text>
          <a
            href="https://secure.numero.ai/contribute/Marco-Amaral-for-State-Superintendent-of-Public-Instruction-2022?fbclid=IwAR22CquPr-oTRhJjFxlWarhpX4iilCfFv3oOfwQFMdtPwz11iWIuSiVaoCg"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                width: "175px",
                height: "50px",
                backgroundColor: "#F3D934",
                border: "none",
                borderRadius: "6px",
                color: "#8C2723",
                fontSize: "18px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#F3D934",
                },
              }}
            >
              DONATE
            </Button>
          </a>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default DonatePopOver;
