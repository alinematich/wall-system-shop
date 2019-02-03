import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './../Environment';
import RequestList from './RequestList';

class RequestListRenderer extends React.Component {
    constructor() {
        super();
        this.state = {
            actions: 0,
            message: "",
            position: 0
        }
    }

    increaseAction(message, position) {
        this.setState({actions: this.state.actions + 1, message, position})
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={PublicProfileQuery}
                variables={{fake: this.state.actions}}
                render={
                    ({error, props}) => {
                        if (error) {
                            return <div>{error.message}</div>
                        } else if (props) {
                            return <RequestList change={this.increaseAction.bind(this)}
                                                products={props.me.sellingProducts}
                                                message={this.state.message}
                                                position={this.state.position}
                            />
                        }
                        return <div/>
                    }}
            />
        )
    }

}

const PublicProfileQuery = graphql`
    query RequestListRendererQuery{
        me{
            sellingProducts{
                id
                title
                address
                prodYear
                price
                category
                image
                seller{
                    id
                    phone
                    firstName
                    lastName
                }
                buyer{
                    id
                    phone
                    firstName
                    lastName
                }
            }
            boughtProducts{
                id
                title
                address
                prodYear
                price
                category
                image
                seller{
                    id
                    phone
                    firstName
                    lastName
                }
                buyer{
                    id
                    phone
                    firstName
                    lastName
                }
            }
        }
    }
`;

export default RequestListRenderer