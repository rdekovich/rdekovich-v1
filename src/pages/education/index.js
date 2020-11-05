/**
 * The component to be rendered in the Education route.
 * 
 * This component will be rendering information about the
 * users educational experience, graphical and textual, for
 * reference of the degrees and/or educational experiences
 * from the user.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/education/index.js
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "@css/education.css";
import "@css/mixins.css";

function Education () {
    return (
        <Container fluid className="education">
            <h2 className="preface">Education</h2>
        </Container>
    )
}

export default Education;