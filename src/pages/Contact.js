import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <h2>
                Interested?
            </h2>
            <h3>Contact me!</h3>


            <section class="c-section -fixed" data-scroll-section data-persistent>
                <div class="o-container" id="fixed-elements">
                    <div class="o-layout">
                        <div class="o-layout_item u-2/5@from-medium">
                            <div class="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
                                <div class="c-section_infos_inner" data-scroll data-scroll-offset="200">
                                    <h3>
                                        04. <br>
                                        Fixed elements
                                    </h3>
                                    <div class="c-sections_infos_text u-text">
                                        <p>
                                            Create slides that stick and untick to the viewport while scrolling through.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="o-layout_item u-3/5@from-medium">
                            <div class="c-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                                <div class="c-fixed_target" id="fixed-target"></div>
                                <div class="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target" style="background-image:url('dist/images/locomotive04.jpg')"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Contact
