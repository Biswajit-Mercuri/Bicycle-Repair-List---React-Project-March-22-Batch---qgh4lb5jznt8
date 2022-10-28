import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { repairAdded, repairUpdated } from "../actions";

export default function Form() {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.bicycle.item);
    const editMode = useSelector((state) => state.bicycle.editMode);
    const [owner, setOwner] = useState(item.owner);
    const [model, setModel] = useState(item.model);
    const [id, setId] = useState(item.id);
    const [description, setDescription] = useState(item.description);

    useEffect(() => {
        setOwner(item.owner);
        setModel(item.model);
        setDescription(item.description);
        setId(item.id);
    }, [item]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(
                repairUpdated({
                    id,
                    owner,
                    model,
                    description,
                })
            );
        } else {
            dispatch(
                repairAdded({
                    owner,
                    model,
                    description,
                })
            );
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="owner-text-box">Owner</label>
                <input
                    id="owner-text-box"
                    type="text"
                    name="owner"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Owner..."
                    required
                />

                <label htmlFor="model-text-box">Model</label>
                <input
                    id="model-text-box"
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Model.."
                    required
                />

                <label htmlFor="description-text-box">Description</label>
                <input
                    id="description-text-box"
                    type="text"
                    name="description.."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description..."
                    required
                />
                <button>+</button>
            </form>
        </div>
    );
}
