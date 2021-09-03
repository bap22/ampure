/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
    {
        title: 'Skate ipsum dolor sit amet?',
        contents: (
            <div>
                darkslide skate or die 720 pop shove-it nose noseblunt slide
                roll-in. Indy grab heel flip Wes Humpston kickturn steps
                noseblunt slide backside frontside air. Casper slide noseblunt
                slide ho-ho soul skate rip grip wax grab. Indy grab varial 540
                airwalk skate or die steps salad grind. Transfer rad pivot
                noseblunt slide chicken wing fast plant hardware. Rail slide
                varial lipslide hang up bone air tail coffin. Axle Willy Santos
                backside quarter pipe street fastplant 900 shinner. Lipslide
                Japan air nose slide mongo feeble crooked grind skate or die.
                Hurricane Jason Wilson wheels coping nose slide nose bump
                darkslide bail.
            </div>
        ),
    },
    {
        title: 'Rock and roll bluntslide axle set dude carve fakie out chicken wing?',
        contents: (
            <div>
                Rocket air casper slide pop shove-it nosegrind nosebone pressure
                flip lipslide. Fast plant lien air smith grind hang up lipslide
                wheels Steve Rocco half-cab. Skate key bluntslide Tracker frigid
                air noseblunt slide cab flip Jimmy'Z spine. Soul skate cess
                slide Bucky Lasek roll-in gnarly bigspin bone air spine.
            </div>
        ),
    },
    {
        title: `Gap full-cab ollie north pressure flip air dude handplant.?`,
        contents: (
            <div>
                Lip lipslide sketchy frigid air nose-bump Brooklyn Banks hard
                flip pogo. Kevin Harris layback rail downhill tic-tac crail
                slide switch. Shinner deck frigid air fast plant ho-ho casper
                Duel at Diablo Kevin Harris. Boardslide ollie north crailtap Old
                Ghosts fakie out ledge invert rocket air. Tom Knox rails
                nosebone noseblunt slide 1080 body varial helipop tailslide.
            </div>
        ),
    },
    {
        title: `Nose grab grab crooked grind risers crail grab baseplate Kevin Harris?`,
        contents: (
            <div>
                Deck rails bruised heel chicken wing hard flip hardware Kevin
                Harris Julien Stranger. Nose grab tailslide rail hard flip camel
                back boned out full pipe. Sketchy air no comply steps sick
                varial coping. Griptape Steve Severin 720 bail hand rail flail
                baseplate egg plant. Hang ten varial mini ramp coffin nollie
                drop in spine.
            </div>
        ),
    },
];
export default function Faq() {
    return (
        <section sx={{ variant: 'section.faq' }}>
            <Container>
                <SectionHeader
                    title="Frequently asked question"
                    slogan="Get your question answer"
                />
                <Box
                    sx={{
                        display: 'flex',
                        width: ['100%', null, null, '650px', '745px'],
                        flexDirection: 'column',
                        mx: 'auto',
                        my: -4,
                    }}
                >
                    <Accordion items={faqs} />
                </Box>
            </Container>
        </section>
    );
}
