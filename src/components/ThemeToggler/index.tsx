import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label={""}
      />
    </Box>
  );
}
