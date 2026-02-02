import { redirect } from "next/navigation";

const ThankYouRedirect = async ({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) => {
  const { locale, slug } = await params;
  redirect(`/${locale}/thanks/${slug}`);
}

export default ThankYouRedirect;
