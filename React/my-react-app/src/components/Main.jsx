import React from "react";
import { Section } from "./Main.styles";
import { SectionHeading } from "./Main.styles";
import { SectionBody } from "./Main.styles";
import { GridRow } from "./Main.styles";
import { GridCol } from "./Main.styles";

// import './Main.scss';
const NUM_COLS = 2;

const Main = ({ sectionId }) => {
    return (
        <main className="main-content">
            `<h1>Understanding components in React</h1>
            <hr />
            <GridRow>
                <GridCol cols={NUM_COLS}>
                    {sectionId === "section-1" && (
                        <Section id="section-1">
                            <SectionHeading>Section 1</SectionHeading>
                            <SectionBody>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Porro optio, repellendus,
                                quasi possimus non sint corrupti sit, tenetur
                                dignissimos ad hic magnam fuga saepe nemo quia
                                eos repellat dolor illum?
                            </SectionBody>
                        </Section>
                    )}
                </GridCol>
                <GridCol cols={NUM_COLS}>
                    {sectionId === "section-2" && (
                        <Section id="section-2" className="section">
                            <SectionHeading>Section 2</SectionHeading>
                            <SectionBody>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Porro optio, repellendus,
                                quasi possimus non sint corrupti sit, tenetur
                                dignissimos ad hic magnam fuga saepe nemo quia
                                eos repellat dolor illum?
                            </SectionBody>
                        </Section>
                    )}
                </GridCol>
                <GridCol cols={NUM_COLS}>
                    {sectionId === "section-3" && (
                        <Section id="section-3" className="section">
                            <SectionHeading>Section 3</SectionHeading>
                            <SectionBody>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Porro optio, repellendus,
                                quasi possimus non sint corrupti sit, tenetur
                                dignissimos ad hic magnam fuga saepe nemo quia
                                eos repellat dolor illum?
                            </SectionBody>
                        </Section>
                    )}
                </GridCol>
                <GridCol cols={NUM_COLS}>
                    {sectionId === "section-4" && (
                        <Section id="section-4" className="section">
                            <SectionHeading>Section 4</SectionHeading>
                            <SectionBody>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Porro optio, repellendus,
                                quasi possimus non sint corrupti sit, tenetur
                                dignissimos ad hic magnam fuga saepe nemo quia
                                eos repellat dolor illum?
                            </SectionBody>
                        </Section>
                    )}
                </GridCol>
            </GridRow>
        </main>
    );
};

export default Main;
