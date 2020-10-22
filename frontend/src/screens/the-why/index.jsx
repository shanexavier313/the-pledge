import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Link,
  Typography,
  Grid
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const SectionSummary = styled(AccordionSummary)`
  && {
    box-shadow: none;
    padding: 0;
  }
`

const SectionDetails = styled(AccordionDetails)`
  && {
    box-shadow: none;
    padding: 0;
  }
`

const SectionAccordian = styled(Accordion)`
  && {
    box-shadow: none;
  }
`

const Section1 = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box my={1}>
      <SectionAccordian expanded={expand}>
        <SectionSummary>
          <Box>
            <Typography mb={3} variant="h6">
              <b>(1) THE STAKES ARE TOO HIGH TO IGNORE.</b>
            </Typography>
            <Typography variant="body1">
              <p>
                The stakes of this election are existential, especially for
                young people who hope for a future. We face a global
                environmental reality of consistent climate catastrophe,
                population increase and{' '}
                <Link href="https://www.nytimes.com/interactive/2020/07/23/magazine/climate-migration.html">
                  widespread population displacement
                </Link>
                , an{' '}
                <Link href="https://www.wsj.com/articles/viral-outbreaks-once-rare-become-part-of-the-global-landscape-11583455309">
                  increase in global pandemics
                </Link>
                , rising income inequality domestically, heightened nuclear
                tensions and fractured international relations, and President
                Trump’s authoritarian and conspiracy-driven administration. We
                cannot wait to recover our democracy and planet. The time to act
                is now.
              </p>
            </Typography>
          </Box>
        </SectionSummary>
        <SectionDetails>
          <Typography variant="body1">
            <p>
              A week into Donald Trump’s presidency, the Doomsday Clock was
              pushed to two-and-a-half minutes to midnight – the closest since
              1953. As a result of “the failure of the international community
              to deal with nuclear weapons and climate change,” and “largely
              because of statements [made by] the president” the Bulletin of
              Atomic Scientists has set the clock to 100 seconds to midnight—
              <Link href="https://www.independent.co.uk/news/world/americas/us-politics/noam-chomsky-donald-trump-doomsday-clock-midnight-close-nuclear-war-north-korea-a8014626.html">
                the closest it’s ever been.
              </Link>{' '}
            </p>
            <p>
              <Link href="https://lincolnproject.us/">The Lincoln Project</Link>
              , a group of high-powered and politically engaged conservatives
              who have pledged to fight to protect our democracy against Trump
              and his band of corrupt Republicans, states the constitutional
              stakes quite well:
            </p>
            <p>
              <i>
                This fall’s elections will be about much more than just who
                controls one house of Congress or the White House. This
                November, the American people will decide the path for America’s
                future. All of the prosperity and freedom we’ve come to take for
                granted depends on our public servants serving the Constitution
                first, last and always. Today, one party [The GOP] has abdicated
                that responsibility and instead pledged their loyalty to one
                person.
              </i>
            </p>
            <p>
              <i>
                Our Mission: Defeat President Trump and Trumpism at the ballot
                box.
              </i>
            </p>
            <p>
              <i>
                We do not undertake this task lightly nor from ideological
                preference. Our many policy differences with national Democrats
                remain. However, the priority for all patriotic Americans must
                be a shared fidelity to the Constitution and a commitment to
                defeat those candidates who have abandoned their constitutional
                oaths, regardless of party. Electing Democrats who support the
                Constitution over Republicans who do not is a worthy effort.
              </i>
            </p>
          </Typography>
        </SectionDetails>
      </SectionAccordian>
      <Button color="primary" onClick={() => toggleExpand(!expand)}>
        Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
    </Box>
  )
}

const Section2 = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box mt={1}>
      <SectionAccordian expanded={expand}>
        <SectionSummary>
          <Box>
            <Typography mb={3} variant="h6">
              <b>(2) EVERY VOTE (AND EVERY CONVERSATION) MATTERS.</b>
            </Typography>
            <Typography variant="body1">
              <p>
                <b>Voting:</b> For many people, the belief that their vote
                doesn't matter is the main factor behind their decision not to
                vote. President Trump has stated that he will contest this
                election, and that he does not intend to pass power peacefully.
                This means that <b>we need a blow-out -- every vote matters.</b>
              </p>
            </Typography>
          </Box>
        </SectionSummary>
        <SectionDetails>
          <Typography variant="body1">
            <p>
              Many Americans feel that their contributions to the democratic
              process don’t matter. The “
              <Link href="https://knightfoundation.org/reports/the-100-million-project/">
                100 Million Project
              </Link>
              ,” a study conducted by the Knight Foundation, found that for some
              20% of chronic non-voters and young people, the primary reasons
              for not voting were that their “vote doesn’t matter” and that “the
              system is [too] corrupt” to be changed. Moreover, the “
              <Link href="https://hiddentribes.us/">Hidden Tribes</Link>” study
              indicates that many liberals of lower socioeconomic status--many
              of whom are registered to vote-do not end up voting because they
              have no faith that the system will operate fairly or in their
              interest.{' '}
              <b>
                For many people, the belief that their vote doesn't matter is
                the key factor underlying their decision not to engage in the
                election.
              </b>{' '}
              If people can be helped to understand that their involvement
              matters, they will be more likely to participate.{' '}
            </p>
            <p>
              Trump’s attacks on our democratic institutions include attacking
              the legitimacy of the electoral process itself. Trump has stated
              that he will contest this election, and that he does not intend to
              pass power peacefully. This means that the closer the vote, the
              more chaotic and disruptive our society will become. Trump has
              already nominated a conservative loyalist to the Supreme Court to
              replace Justice Ruth Bader Ginsburg. We need to win in key swing
              states, but, more importantly, we need a landslide to ensure that
              this election is decided by the people and not by President
              Trump's new ultraconservative Supreme Court. On September 24th,
              <Link href="https://www.reviewjournal.com/news/politics-and-government/eric-trump-says-his-father-will-concede-if-joe-biden-wins-big-2129305">
                Eric Trump told supporters
              </Link>{' '}
              at a Las Vegas campaign stop that his father “of course [would]
              concede” the election “if he got blown out of the water” by Joe
              Biden.
            </p>
            <p>
              So,{' '}
              <b>
                <i>we need a blow-out.</i>
              </b>{' '}
              Every vote counts.
            </p>
          </Typography>
        </SectionDetails>
      </SectionAccordian>
      <Button color="primary" onClick={() => toggleExpand(!expand)}>
        Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
    </Box>
  )
}

const Section3 = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box mb={1}>
      <SectionAccordian expanded={expand}>
        <SectionSummary>
          <Box>
            <Typography variant="body1">
              <p>
                <b>Beyond Voting (Conversations):</b> Traditional
                get-out-the-vote methods, like phone-banking and text-banking,
                pairs strangers with strangers, but people are more open to new
                ideas when they talk to friends. The more people talk about
                voting, the more they know about voting, and the more likely
                they are to vote. Changing one person’s mind to vote for Biden,
                or away from voting for Trump, can have a ripple effect on the
                whole community. Every conversation matters.
              </p>
            </Typography>
          </Box>
        </SectionSummary>
        <SectionDetails>
          <Typography variant="body1">
            <p>
              When we participate in the democratic process, for example by
              taking The Pledge, our potential for impact grows exponentially.
              The authors of book “
              <Link href="http://www.connectedthebook.com/">Connected</Link>”
              discuss a series of consistent, dependable phenomena, so pervasive
              in social networks that they’ve deemed them rules (“Rules of Life
              in the Network”):
            </p>
            <p>
              <i>
                People typically have many direct ties to a wide variety of
                people, including parents and children, brothers and sisters,
                spouses (and nice ex-spouses), bosses and coworkers, and
                neighbors and friends. And each and every one of these ties
                offers opportunities to influence and be influenced.
              </i>
            </p>
            <p>
              The fourth of these rules is that “Our Friends’ Friends’ Friends
              Affect Us”
            </p>
            <p>
              <i>
                Our friends and family can influence us to do things, like gain
                weight or show up at the polls. But their friends and family can
                influence us too. This is an illustration of hyperdyadic spread,
                or the tendency of effects to spread from person to person to
                person, beyond an individual’s direct social ties.
              </i>
            </p>
            <p>
              Changing one person’s mind away from voting for Trump, who lives
              in a community of Trump supporters in a swing state, can have a
              massive rippling effect on the whole community—and imagine the
              impact it would have if they agreed to take the pledge! Every vote
              matters. Every conversation matters.
            </p>
          </Typography>
        </SectionDetails>
      </SectionAccordian>
      <Button color="primary" onClick={() => toggleExpand(!expand)}>
        Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
    </Box>
  )
}

const Section4 = () => {
  const [expand, toggleExpand] = useState(false)
  return (
    <Box my={1}>
      <SectionAccordian expanded={expand}>
        <SectionSummary>
          <Box>
            <Typography mb={3} variant="h6">
              <b>(3) THE COUNTRY AND THE WORLD ARE WORTH FIGHTING FOR.</b>
            </Typography>
            <Typography variant="body1">
              <p>
                For many, 2020 has been incredibly bleak. It may feel like our
                society is splintering, and that our democracy is failing. It
                might feel tempting to disengage from it all, because sitting in
                the thick of it is painful and scary.
              </p>
              <p>
                But we need each other to take action now. The people we put
                into power shape our lives. We have the opportunity to take
                action today that will affect all of our futures. We invite you
                to join us - our voices matter, our votes matter, and together,
                we can fight for the future we deserve.
              </p>
            </Typography>
          </Box>
        </SectionSummary>
        <SectionDetails>
          <Typography variant="body1">
            <p>
              Our country is in a tough place right now. That comes from faulty,
              and in many cases, monstrously immoral engineering of some aspects
              of our governmental system over a long period of time. For many,
              it seems the American experiment has failed. Some of these people
              may not be compelled to fight for our country based solely on the
              idea that the Constitution lets our standards and rules of
              governance develop and change over time. But they may be compelled
              to fight if they understand that what happens in America right
              now--the result of this election--not only affects the lives of
              the nation’s already massively disenfranchised, but also affects
              the <b>world as a whole</b>. If American democracy crumbles, and,
              God forbid, falls into the hands of an insane, racist,
              narcissistic dictator, every human being, every animal, everyone
              and everything the world over will pay for it.
            </p>
            <p>
              We know things are bleak and that it can seem like fighting for
              the world means fighting to keep the powerful, powerful, and the
              oppressed, oppressed. We know humans have pesky, stubborn,
              hard-to-break patterns of selfishness and self-sabotage. And we
              think everyone is feeling the struggle of those realities in their
              own way right now.
            </p>
            <p>
              But this world is also beautiful… and{' '}
              <b>
                <i>we</i>
              </b>{' '}
              are also beautiful. And it, and us, are worth fighting for!
              Honestly, what else are we even doing here? Hiding? Festering in
              denial? Those things slowly eat your soul. Straight up, they want
              to eat you… and they will eat you. And when that happens we become
              the problem. We gotta stand up! Your soul is worth fighting for!
              <b>
                <i>We are worth fighting for!</i>
              </b>
            </p>
          </Typography>
        </SectionDetails>
      </SectionAccordian>
      <Button color="primary" onClick={() => toggleExpand(!expand)}>
        Learn More {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
    </Box>
  )
}

export const TheWhy = () => (
  <Grid container direction="column" alignItems="center" justify="center">
    <Box
      width="60%"
      border={1}
      mt={2}
      p={2}
      borderColor="primary.main"
      textAlign="center">
      <Box color="primary.main" textAlign="center">
        <Typography variant="h6">
          <b>OUR MISSION.</b>
        </Typography>
      </Box>
      <Typography variant="body1">
        Our mission is to harness the power of personal social networks to
        encourage our friends and family to vote for Joe Biden – to preserve the
        integrity of our democracy and the future of our planet.
      </Typography>
      <Box color="primary.main" textAlign="center">
        <Typography variant="h6">
          <b>WHAT BROUGHT US HERE</b>
        </Typography>
      </Box>
      <Typography variant="body1">
        2020 has thrown a lot at us: a global pandemic; economic recession;
        racial and social discord. President Donald Trump and his administration
        have not helped the majority of the country that is in crisis. We as a
        country, as a people, and as a society, need new leadership, rekindled
        hope, and resounding change.
      </Typography>
      <Box color="primary.main" textAlign="center">
        <Typography variant="h6">
          <b>THE PLEDGE</b>
        </Typography>
      </Box>
      <Typography variant="body1">
        The pledge is our commitment to calling 5 or more friends and family
        between now and November 3rd to encourage them to vote blue down the
        ballot — to get politicians who threaten our democracy out of office.
      </Typography>
    </Box>
    <Box textAlign="center" mt={2}>
      <Typography variant="h4">WHY THE PLEDGE?</Typography>
    </Box>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </Grid>
)
