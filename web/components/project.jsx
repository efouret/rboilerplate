const React = require('react');
const ProjectStore = require('../stores/project-store');

const Project = React.createClass({
   componentDidMount() {
       ProjectStore.getProject(this.props.params.id);
   },
    
   render() {
       return (
         <div>         
            {this.props}
         </div>  
       );
   } 
});

module.exports = Project;