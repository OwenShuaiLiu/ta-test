import React from "react";
import tableau from "tableau-api";

class TableauTest extends React.Component{
    initTableau() {
        const vizUrl = "https://public.tableau.com/views/AdvancedSuperstoreDashboard/StateAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link";

        const options = {
            hideTabs: true,
            width: "700px",
            height: "800px",
            onFirstInteractive: () => {
                console.log("it worked");
            }
        };
        this.viz = new window.tableau.Viz(this.container, vizUrl, options);
    }

    render() {
        return <div ref={c => (this.container=c)} />;
    }

    componentDidMount() {
        this.initTableau();
    }
}

export default TableauTest;