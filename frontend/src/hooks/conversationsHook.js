

import React, { useState, useEffect } from 'react';

const conversationsHook = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
		const getConversations = async () => {
			
			try {
				const res = await fetch("/api/users");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				console.log("error");
			} 
		};

		getConversations();
	}, []);

    return conversations;
};

export default conversationsHook;