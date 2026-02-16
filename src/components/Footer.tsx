
import { getProfileData, getSocialLinks } from "@/actions/info";
import FooterClient from "./FooterClient";

export default async function Footer() {
    const [data, socialLinks] = await Promise.all([
        getProfileData(),
        getSocialLinks()
    ]);

    return <FooterClient data={data} socialLinks={socialLinks} />;
}
