import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerRequest } from "../api/users";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaEarlybirds } from "react-icons/fa";
import { Loader } from "../components/Loader";
import {
	validatePassword,
	validateConfirmPassword,
} from "../schemas/passwordSchema";

const Register = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const registerMutation = useMutation({
		mutationFn: registerRequest,
		onSuccess: () => {
			queryClient.invalidateQueries("tweets");
			navigate("/login");
			console.log("registerMutation success");
		},
		onError: (error) => {
			console.error(error);
		},
	});

	if (registerMutation.isPending) return <Loader />;
	//TODO: VALIDATE FIELDS TO NOT BE EMPTY
	return (
		<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='m-5 p-10 bg-grey-3'>
				<div className='w-[300px]  max-w-md space-y-8 md:w-[400px] lg:w-[400px]'>
					<div>
						<FaEarlybirds className='mx-auto text-white-500 h-12 w-12' />
						<h2 className='mt-6 text-center text-3xl text-grey' id='loginTitle'>
							Join CloneChirp!
						</h2>
					</div>
					<Formik
						initialValues={{
							username: "",
							email: "",
							password: "",
							confirmPassword: "",
						}}
						onSubmit={(values) => {
							registerMutation.mutate(values);
							console.log(values);
						}}
					>
						{({ errors, values }) => (
							<Form>
								<Field
									id='username'
									name='username'
									placeholder='Username'
									className='
                border-b-[1px] 
                border-white-800 
                w-full
                p-5 
                cursor-pointer 
                my-3
                bg-transparent outline-neutral-800 
                '
								/>

								<Field
									id='email'
									name='email'
									placeholder='Email Address'
									className='
                border-b-[1px] 
                border-white-800 
                w-full
                p-5 
                cursor-pointer 
                my-3
                bg-transparent outline-neutral-800 
                '
								/>

								<Field
									type='password'
									id='password'
									name='password'
									validate={validatePassword}
									placeholder='Password'
									className='
                my-3
                border-b-[1px] 
                border-white-800 
                w-full
                p-5 
                cursor-pointer 
                bg-transparent outline-neutral-800 
                '
								/>
								{errors.password && <div>{errors.password}</div>}
								<Field
									type='password'
									id='confirmPassword'
									name='confirmPassword'
									validate={(value) =>
										validateConfirmPassword(values.password, value)
									}
									placeholder='Confirm Password'
									className='
                my-3
                border-b-[1px] 
                border-white-800 
                w-full
                p-5 
                cursor-pointer 
                bg-transparent outline-neutral-800 
                '
								/>
								{errors.confirmPassword && <div>{errors.confirmPassword}</div>}
								<Link to={"/login"}>
									<button
										type='submit'
										className='bg-sky-500 my-2 w-full hover:bg-sky-600 p-2 px-5 rounded-full text-white font-bold'
									>
										Register
									</button>
								</Link>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Register;
