import '../styles/press-section.scss';

function PressSection() {
    const pressCardInfo = [
        {
            quote: "Since pared down to a trio from the four-piece incarnation they present here, Austin's Crimson Devils first released their debut, A Taste for Blood, in 2017, but gave it a vinyl revisit last year and it's little mystery why. The record comprises 11 sharply-composed tracks of Small Stone-style heavy rock, taking cues from Sasquatch in modern-via-classic modus, picking and choosing elements of '70s and '90s rock to conjure formidable groove and engaging hooks.",
            quoteLink: "https://theobelisk.net/obelisk/2019/03/19/quarterly-review-spring-2019-day-2/",
            quoteAuth: "The Obelisk",
            extra: ""
        },
        {
            quote: "You have to give the CRIMSON DEVILS one thing: Heavy Rock'n Roll is exactly the right description for what's coming out of the speakers. While related bands such as Double Crush Syndrome are much more reserved in comparison and therefore come across as catchier, the quartet from Texas spices up their sound with a good portion of mangyness and a light pinch of Stoner Rock.",
            quoteLink: "https://www.hellfire-magazin.de/crimson-devils-a-taste-for-blood/",
            quoteAuth: "Hellfire Magazine",
            extra: "(Translated from German)"
        },
        {
            quote: "Over the years, the idea has been created that rock is dying, but each group that jumps onto the scene continues to show that the power of this musical genre has not faded even 5%.<br />Such is the case of Crimson Devils, a band with a genuine style that has been reflected throughout their career. His seven demos and his presentations at festivals such as SXSW have managed to gradually win over a following of fans that is on the rise so far.",
            quoteLink: "https://www.indierocks.mx/musica/buenas-nuevas/crimson-devils-rock-roll-directo-de-austin-texas/",
            quoteAuth: "Indie Rocks",
            extra: "(Translated from Spanish)"
        },
        {
            quote: "Dirty and rough: heavy rock from the oil state &ldash; If some doom acts were to let themselves be lured out of their reserves and integrate a portion of high-energy rock into the sound, the result would probably sound similar to the current output of the CRIMSON DEVILS from Austin, Texas. The Americans definitely have a flair for dirty grooves and even dirtier riffs and are just as good with their occasional fast-forward attitude as with the frequent cross passes to the stoner segment. All in all, the material of 'A Taste For Blood' may be far from all creative innovations, but such qualities are not in demand in the eleven new tracks. Instead, you want to experience snotty heavy rock - and the band serves it practically non-stop on the first try.",
            quoteLink: "https://powermetal-de.translate.goog/review/review-Crimson_Devils/A_Taste_For_Blood,33232.html?_x_tr_sch=http&_x_tr_sl=de&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc",
            quoteAuth: "PowerMetal.de",
            extra: "(Translated from German)"
        }
    ];
    const renderPress = (card) => {
        return (
            <div key={card.quoteAuth} className="main__press-card">
                <blockquote>
                    <p>
                        {card.quote}
                    </p>
                    <p>
                        &mdash; <a href={card.quoteLink} target="_blank" rel="noreferrer">{card.quoteAuth}</a>
                        {card.extra.length > 0 && <><br /><small><em>{card.extra}</em></small></>}
                    </p>
                </blockquote>
            </div>
        );
    };
    return (
        <>
            {pressCardInfo.map(renderPress)}
        </>
    );
};

export default PressSection
