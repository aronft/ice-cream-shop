import { BreadcrumpSection } from "@/components/common/breadcrump-section/breadcrump-section";
import { Container } from "@/components/ui/objects/container/container";

export default async function AboutPage() {
    return (
        <>
            <BreadcrumpSection title="About Us" />
            <section className="py-16">
                <Container>
                    <h1>About section page</h1>
                </Container>
            </section>
        </>
    );
}
