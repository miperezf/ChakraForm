import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../../schemas/user";
import {
  Text,
  Box,
  Button,
  InputGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const Form = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<string>("password");

  const handleClick = () => {
    setShow(show === "password" ? "text" : "password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: userForm) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                _invalid={errors.email?.message}
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "El largo minimo es 3",
                  },
                })}
              />
              <Text color="tomato">{errors.email?.message}</Text>
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show}
                  placeholder="*******"
                  {...register("password", {
                    minLength: {
                      value: 3,
                      message: "El largo minimo es 3",
                    },
                  })}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={""}
                    onClick={handleClick}
                    icon={
                      show === "password" ? (
                        <HiOutlineEye />
                      ) : (
                        <HiOutlineEyeSlash />
                      )
                    }
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
              <Text color="tomato">{errors?.password?.message}</Text>
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              loadingText="Enviando"
              isLoading={isLoading}
            >
              {isLoading ? "Enviando" : "Sign in"}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Form;
