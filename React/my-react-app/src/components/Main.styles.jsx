import styled from 'styled-components';

// styled is a function that is used to create a native HTML component with a style
// tagged template literal (a function which gets the string, processes it, and returns a component with the given style)
// i.e. we get a Section with these styles
const Section = styled.section`
    background-color: gold;
    padding: 1em;
    margin: 1em 0;
`;

const SectionHeading = styled.h2`
    color: white;
`;

const SectionBody = styled.p`
    font-size: 1.2em;
`;

const GridRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const GridCol = styled.div`
    flex-basis: 100%;

    @media (min-width: 1200px) {
        flex-basis: ${props => {
            if(props.cols) {
                return(`${(100/props.cols - 1)}%`)
            }
            else {
                return('100%')
            }
        }};
    }
`;

// what the above generates...
// const Section = ( props ) => {
//     return (
//         <section style={.....}>
//             {props.children}
//         </section>
//     );
// }

export {
    Section,
    SectionHeading,
    SectionBody,
    GridRow,
    GridCol
};