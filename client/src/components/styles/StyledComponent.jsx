import { styled } from "@mui/material";

// In the below code, "VisuallyHiddenInput" is a tag used as <VisuallyHiddenInput/> which is nothing but a <input/> tag with the style mentioned,
export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: -1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
})