import './Table.css';

const Table = () => {


    return (
        <>
            <table className="table table-striped table-centered mb-0">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Account No.</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-user">
                        Risa D. Pearson
                    </td>
                    <td>AC336 508 2157</td>
                    <td>July 24, 1950</td>
                    <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-pencil"></i></a>
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-delete"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="table-user">
                        Ann C. Thompson
                    </td>
                    <td>SB646 473 2057</td>
                    <td>January 25, 1959</td>
                    <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-pencil"></i></a>
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-delete"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="table-user">
                        Paul J. Friend
                    </td>
                    <td>DL281 308 0793</td>
                    <td>September 1, 1939</td>
                    <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-pencil"></i></a>
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-delete"></i></a>
                    </td>
                </tr>
                <tr>
                    <td className="table-user">
                        Sean C. Nguyen
                    </td>
                    <td>CA269 714 6825</td>
                    <td>February 5, 1994</td>
                    <td className="table-action">
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-pencil"></i></a>
                        <a href="javascript: void(0);" className="action-icon"> <i class="mdi mdi-delete"></i></a>
                    </td>
                </tr>
                </tbody>
            </table>


        </>
    )
}

export default Table;