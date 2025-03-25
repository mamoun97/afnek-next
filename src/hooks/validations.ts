import useLang from "@/lang/useLang";
import * as Yup from "yup";

export function useFlightValidationSchema(){
    const { t } = useLang()
    return Yup.object().shape({
        fullname: Yup.string().required(t.header.fullname_req),
        email: Yup.string().email(t.header.invalid_email),
        phone: Yup.string().required(t.header.phone_req),
       
      })
}

