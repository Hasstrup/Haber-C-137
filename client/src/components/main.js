import React from 'react';
import { Switch, Route} from 'react-router';


import ViewAll from './view-all';
import DetailItem from './detail-item';
import Form from './student-form'
import Landing from './landing'

// import Details from './Details';
// import AddStudent from './AddStudent';
// import EditStudent from './EditStudent';

const Main = () => {
    return (
        <main>
                      <Switch>

                            <Route exact path = '/viewstudent' render={props => <ViewAll selector='student' {...props} />} />
                            <Route exact path = '/viewteacher'  render={props => <ViewAll selector='teacher' {...props} />} />
                            <Route exact path = '/viewclass'  render={props => <ViewAll selector='class' {...props} />} />
                            <Route exact path = '/newteacher'  render={props => <Form selector='teacher' validator='no' {...props} />} />
                            <Route exact path = '/newstudent'  render={props => <Form selector='student' validator='no' {...props} />} />
                            <Route exact path = '/newclass'  render={props => <Form selector='class' validator='no' {...props} />} />
                            <Route exact path = '/editteacher/:id'  render={props => <Form selector='teacher' validator='yes' {...props} />} />
                            <Route exact path = '/editstudent/:id'  render={props => <Form selector='student' validator='yes' {...props} />} />
                            <Route exact path = '/editclass/:id'  render={props => <Form selector='class' validator='yes' {...props} />} />
                            <Route exact path = '/student/:id'  render={props => <DetailItem selector='student' {...props} />} />
                            <Route exact path = '/class/:id'  render={props => <DetailItem selector='class' {...props} />} />
                            <Route exact path = '/teacher/:id'  render={props => <DetailItem selector='teacher' {...props} />} />

                            <Route exact path = '/classes'  render={props => <Landing selector='class' {...props} />} />
                            <Route exact path = '/students'  render={props => <Landing selector='student' validator='no' {...props} />} />
                            <Route exact path = '/teachers'  render={props => <Landing selector='teacher' validator='no' {...props} />} />

                            <Route exact path = '/' render={props => <Landing selector=''/>} />

              </Switch>
            </main>
    )

}

export default Main
