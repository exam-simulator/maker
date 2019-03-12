import { Mutation } from 'react-apollo'
import { Add } from 'styled-icons/material/Add'
import { createNode } from '../../../apollo/mutation/createNode'
import { examById } from '../../../apollo/query/exam'
import ActionLoading from '../ActionLoading'

export default ({ id }) => (
  <Mutation
    mutation={createNode}
    variables={{ id, type: 'cover' }}
    refetchQueries={[{ query: examById, variables: { id } }]}
  >
    {(createNode, { loading }) => (
      <span className="add" onClick={async () => await createNode()}>
        {loading ? <ActionLoading size={1.5} /> : <Add size={15} />}
      </span>
    )}
  </Mutation>
)
