const RadioBox = React.createClass({
    getInitialState(){
        return {
            selected: ''
        };
    },
    render(){
        const items = this.props.items;
        var keys = items;
        if (typeof items === 'object') {
            keys = Object.keys(items).map(
                function (key) {
                    return key;
                });
        }
        return (
            <table className={'radiobox-group ' + this.props.class}>
                <tbody>
                {keys.map(this.displayItem)}
                </tbody>
            </table>
        );
    },
    displayItem(value, index){
        var name = this.props.items[value];
        var id = this.props.group + '_' + index;
        var group = this.props.group;
        return (
            <tr key={index}>
                <td>
                    <input
                        type="radio"
                        id={id}
                        group={group}
                        name={group}
                        value={value}
                        onChange={this.onItemChange}
                        checked={this.state.selected === value}
                        />
                </td>
                <td>
                    <label htmlFor={id}>{name}</label>
                </td>
            </tr>
        );
    },
    onItemChange(e){
        const selected = e.target.value;
        this.setState({selected});
        this.props.onChange(selected);
    },
    componentWillMount(){
        const selected = this.props.selected;
        this.setState({selected});
    }
});
export default RadioBox;
