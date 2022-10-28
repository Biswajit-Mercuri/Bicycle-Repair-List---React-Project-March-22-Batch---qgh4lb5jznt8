import React from "react";
import { useDispatch } from "react-redux";
import { repairRemoved, editTask, repairResolved } from "../actions";

export default function Item(props) {
    const dispatch = useDispatch();
    const { id, owner, model, description, resolved } = props.item;

    const handleUpdate = () => {
        dispatch(
            editTask({
                id,
                owner,
                model,
                description,
                resolved,
            })
        );
    };
    return (
        <div>
            <span>{owner}</span>
            <span>{model}</span>
            <span>{description}</span>
            {"-------- "}
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => dispatch(repairRemoved(id))}>Delete</button>
            <button onClick={(e) => dispatch(repairResolved(id))}>
                {!resolved ? "Done" : "undo"}
            </button>
        </div>
    );
}
