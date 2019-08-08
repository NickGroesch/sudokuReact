import React from "react";


const determineNonent = (row, col) => {
    if (1 <= row && row <= 3) {
        if (1 <= col && col <= 3) { return 1 } else if (4 <= col && col <= 6) { return 2 } else { return 3 }
    } else if (4 <= row && row <= 6) {
        if (1 <= col && col <= 3) { return 4 } else if (4 <= col && col <= 6) { return 5 } else { return 6 }
    } else {
        if (1 <= col && col <= 3) { return 7 } else if (4 <= col && col <= 6) { return 8 } else { return 9 }
    }
}
class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            row: this.props.row,
            col: this.props.col,
            nonent: determineNonent(this.props.row, this.props.col),
            value: this.props.value ? this.props.value : [1, 2, 3, 4, 5, 6, 7, 8, 9],
            solved: this.props.value ? true : false,

        }
    }


    getDisplay = () => {
        this.setState((state) => {
            return { display: state.solved ? state.value : "x" }
        })
    }


    componentDidMount() {
        this.getDisplay()
    }

    clicked = () => {
        if (this.state.display === "x") {//only allow to change if display is not entered yet
            onkeypress = (ev) => {
                let mynumber = ev.key
                if ("123456789".includes(mynumber)) {//sanitize input
                    console.log(`square ${this.state.row} ${this.state.col}is now ${mynumber}`)
                    this.setState((state) => {
                        return { display: mynumber }
                    })
                }
            }
        }
    }

    render() {
        return (
            <button className="square" onClick={() => this.clicked()}>{this.state.display}</button>
        );
    }
}



class Board extends React.Component {
    renderSquare(row, col, value) {
        return <Square row={row} col={col} value={value} key={`sq${row}${col}`} />;
    }

    createEmptyBoard() {
        let board = []
        for (let i = 1; i <= 9; i++) {
            let children = []
            for (let j = 1; j <= 9; j++) {
                children.push(this.renderSquare(i, j))
            }
            board.push(<div className="board-row" key={`row${i}`}>{children}</div>)
        }
        return board
    }

    render() {
        const status = 'Still trying to make it sudoku';

        return (
            <div>
                <div className="status">{status}</div>
                {this.createEmptyBoard()}
            </div>
        );
    }
}

export default Board