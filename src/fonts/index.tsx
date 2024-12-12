import { Poppins } from "next/font/google";

const poppinsSans = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});
export const fonts = () => {
    return {
        poppinsSans,
    }
}

