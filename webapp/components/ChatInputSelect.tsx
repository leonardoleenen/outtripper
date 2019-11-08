import React from 'react'
interface Row {
  id: string;
  value: string;
}
interface Props {
  optionValues: Array<Row>;
}
class ChatInputSelect extends React.Component<Props> {
  render() {
    return (<div>
      <select>
        {this.props['optionValues'].map((option) => (
          <option key={option.id} value={option.id}>{option.value}</option>
        ))}
      </select>
    </div>)
  }
}


/*
const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatInputSelect)
*/

export default ChatInputSelect
