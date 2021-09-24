import { makeStyles } from "@material-ui/styles";
import marco2018CampaignPic from "../../public/images/marco_2018_campaign_pic.png";
import marcoTeacherBadge from "../../public/images/marco_teacher_badge.png";
import marcoStudents from "../../public/images/marco_students.png";
import teacherMarco from "../../public/images/teacher_marco.png";
import marcoAtEvent from "../../public/images/marco_at_event.png";
import useWindowSize from "../../utils/useWindowSize";

const useStyles = makeStyles((theme) => ({
  aboutme: {
    padding: "0 24px",
  },
  heading: {
    marginBottom: "12px",
    color: "#8C2723",
    textTransform: "uppercase",
  },
  headingMobile: {
    marginBottom: "12px",
    color: "#8C2723",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: { marginBottom: "12px", color: "#8C2723" },
  textMobile: { marginBottom: "12px", color: "#8C2723", textAlign: "center" },
  imgCont: { display: "flex", justifyContent: "center", marginBottom: "12px" },
}));

export default function AboutMeSection() {
  const classes = useStyles();

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <div className={classes.aboutme}>
      <h2 className={desktop ? classes.heading : classes.headingMobile}>
        How did I get here?
      </h2>
      <p className={desktop ? classes.text : classes.textMobile}>
        I was raised in a working-class community in East Las Vegas where
        collaboration among neighbors was not just a means of building
        community, it was a means of survival. My parents, Yolanda Valencia and
        Miguel Amaral, immigrated from Mexico, and with them, they brought their
        culture, work-ethic, and love for familia, qualities that they made sure
        all their kids had. Growing up in East Las Vegas was not easy. At the
        time, Clark County School District was one of the most underperforming
        and underfunded school districts in the country. By 6th grade, I knew
        more about drugs than your typical college student. Given the community
        I was being brought in, the schools I was attending, and the
        discrimination that most Chicanos, like myself, faced, my parents made
        the difficult decision of moving me out of Las Vegas and back to San
        Diego.{" "}
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        In San Diego, I moved in with my eldest brother. I eventually graduated
        from Mar Vista High School in 2009 as one of the first Gates Millennium
        Scholars in my school district’s history. I went on to obtain my
        Bachelor’s degree in Political Science with an emphasis on International
        Relations from the University of California - Berkeley, got my Masters
        degree in Special Education from the University of San Diego, and I am
        currently obtaining my PhD degree from the same institution. Over the
        course of my academic career, I have been honored to participate in
        various conferences, engage with some of the leading scholars of our
        time, and work with educators and students from around the country.{" "}
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        I am the first person in my family to graduate from our University of
        California system, pursue a Doctoral degree, and to be an elected
        official. None of this could have been remotely possible without the
        support of my family, friends, and community. I was literally raised by
        a village and it is that village that inspires my goals and day-to-day
        actions. I started my education career as a Special Education
        Paraprofessional. Today, I am a Special Education Teacher, a School
        Board Trustee for South Bay Union School District, and a member of
        various community organizations and collectives.
      </p>
      <div className={classes.imgCont}>
        <img src={marco2018CampaignPic} style={{ height: "480px" }} />
      </div>
      <p className={desktop ? classes.text : classes.textMobile}>
        A pivotal moment in my life, like in the life of millions, was the
        2008-2009 Great Recession. In 2002, my parents finally obtained their
        dream - they were able to obtain their first home and in 6 short years
        that dream turned into a nightmare due to the greed of the 1%. I was a
        freshman at Berkeley when this was all happening. It was not easy to
        attend an institution like Berkeley while my parents were on the verge
        of becoming homeless. At the same time, the State of California was
        imposing the highest tuition and fee increases, to it’s universities, in
        the state’s history. It was a time of turmoil, unrest, and pain. In this
        time and space is when I learned the true value and meaning of
        Solidarity. Although my mother was the first to show me the power of
        collective action through her work in her union, it was during this time
        that my life as an organizer and activist began.
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        Since the financial crash of 2008-2009 I have fought for the belief that
        a better, more just, more dignified, and more loving world is not only
        possible, but necessary. As an Abolitionist, I have advocated for the
        dismantling of several of our outdated institutions. Although the
        institution of Public Education has a long history that is riddled with
        injustices, I believe it has the potential of being the vehicle for
        justice many of our communities require. I profoundly believe, in the
        words of Paulo Freire and bell hooks, that “Education is the practice of
        freedom.” I have lived and witnessed the injustices of our education
        system. I have also witnessed its immense potential to change people’s
        lives. These life experiences are what brings me to run as your next
        California Superintendent of Public Instruction.{" "}
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        In 2022 I will marry the love of my life, Arcelia Magaña. Having the
        opportunity to be with her has been my greatest achievement of my life.
        Together, we wish to one day form a family. I am embarking on this
        journey with a heart full of love, love for my family, your family, and
        the schools our families will interact with.
      </p>
      <div className={classes.imgCont}>
        <img src={marcoTeacherBadge} style={{ height: "400px" }} />
      </div>
      <div className={classes.imgCont}>
        <img src={marcoStudents} style={{ width: "700px" }} />
      </div>
      <h2 className={desktop ? classes.heading : classes.headingMobile}>
        The Vision
      </h2>
      <p className={desktop ? classes.text : classes.textMobile}>
        This campaign believes that it can challenge the California political
        machine, led by our two corporate parties, in a meaningful, politically
        principled, and community orientated fashion to create history. Put
        simply, we are the first campaign, in state history, to face the whole
        power structure. If elected, I would be the first working-class person
        to be elected to this position; first working-teacher to be elected to
        this position; first non-career politician to be elected to this
        position; and, first person to not be a registered Democrat or
        Republican to be elected to this position.{" "}
      </p>
      <div className={classes.imgCont}>
        <img src={teacherMarco} style={{ height: "480px" }} />
      </div>
      <p className={desktop ? classes.text : classes.textMobile}>
        On June 7th, 2022, the people of this beautiful state will have the
        opportunity to choose between a career Democrat and a Teacher for State
        Superintendent of Public Instruction. Our students, our families, and
        our communities, will have the opportunity to be represented like never
        before in the California Department of Education. We are truly beholden
        to the people of the state, to the best interests of our students, to
        respecting the education profession.{" "}
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        The Superintendent position is a “Bully-Pulpit” position. It is the only
        position in the state’s constitution that is meant to be embodied by
        someone not affiliated with any political party. The sad reality is that
        the incumbent, and his predecessors, have never had the convictions to
        effectively use their bully-pulpit to fight for public education. In
        part, this is because there is nothing “non-partisan” or “independent”
        about our current Superintendent. Not only will we hold California
        politicians accountable, we will use the power of our office to hold the
        federal government accountable. We need to stop electing candidates that
        are afraid of disrupting the current political structure and start
        electing candidates that only answer to one group, the people.{" "}
      </p>
      <p className={desktop ? classes.text : classes.textMobile}>
        Our campaign platform embodies the intersection of society and
        education. It represents the demands of our current social
        movements.There are some who will call our campaign radical and, in all
        honesty, we won’t run away from this label. The fact is that this
        campaign, unlike the others in this race, gets to the root of our
        problems in education. It is in that light that we proudly reclaim
        radicalism as the only viable solution for comprehensive change and
        improvements for every student, every worker, every family, and every
        community.
      </p>
      <div className={classes.imgCont}>
        <img src={marcoAtEvent} style={{ height: "480px" }} />
      </div>
      <p className={desktop ? classes.text : classes.textMobile}>
        Unlike the incumbent, I won’t hesitate to publically hold Governor
        Newsom and President Biden accountable; I won’t disrespect grassroot
        movements and educators; I will help organize, mobilize, and
        operationalize the largest public education movement in U.S. history. We
        have a unique opportunity to finally give education the place it
        deserves in our political system. I look forward to working for our
        students and schools with dignity, love, and determination.
      </p>
    </div>
  );
}
