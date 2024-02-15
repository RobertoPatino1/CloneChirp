//TODO: Upgrade error messages

export const validatePassword = (values) => {
	let error = "";
	const passwordRegex = /(?=.*[0-9])/;
	if (!values) {
		error = "*Required";
	} else if (values.length < 8) {
		error = "*Password must be at least 8 characters long.";
	} else if (!passwordRegex.test(values)) {
		error = "*Invalid password. Must contain at least one number.";
	}
	return error;
};

export const validateConfirmPassword = (pass, value) => {
	let error = "";
	if (pass && value) {
		if (pass !== value) {
			error = "Password does not match";
		}
	}
	return error;
};
