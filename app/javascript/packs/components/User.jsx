import React from "react";

export class User extends React.Component {

    render() {

        const users = [
            {id: 1, name: 'Masud Rana', email: 'm.rana@example.com'},
            {id: 2, name: 'Md. Masud', email: 'masud@example.com'},
            {id: 3, name: 'Md. Rana', email: 'rana@example.com'}
        ];

        const rows = users.map((user) => (
            <tr key={user.id}>
                <td><a href={`/users/${user.id}/${user.name}`}>{user.id}</a></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ));

        return (
            <div>
                <h3>List of users</h3>

                <table>
                    <thead>
                        <tr>
                            <th width="20%">#</th>
                            <th width="40%">Name</th>
                            <th width="40%">Email</th>
                        </tr>
                    </thead>

                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>    
        );
    }
}
