import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function TermsConditons() {
    return (
        <Dialog>
            <DialogTrigger><p className="text-white underline hover:text-blue-400">
                Terms & Conditions</p></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">Terms <span className="text-zinc-600">& Conditions</span></DialogTitle>
               
                </DialogHeader>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed pb-5">
                    <p>
                      These are the Terms and Conditions governing the use of this Service and the agreement that
                      operates between You and the Company. These Terms and Conditions set out the rights and
                      obligations of all users regarding the use of the Service.
                    </p>
                    <p>
                      Your access to and use of the Service is conditioned on Your acceptance of and compliance with
                      these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who
                      access or use the Service.
                    </p>
                    <p>
                      By accessing or using the Service You agree to be bound by these Terms and Conditions. If You
                      disagree with any part of these Terms and Conditions then You may not access the Service.
                    </p>
                    <p>
                      You represent that you are over the age of 18. The Company does not permit those under 18 to use
                      the Service.
                    </p>
                    <p>
                      Your access to and use of the Service is also conditioned on Your acceptance of and compliance
                      with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures
                      on the collection, use and disclosure of Your personal information when You use the Application or
                      the Website and tells You about Your privacy rights and how the law protects You. Please read Our
                      Privacy Policy carefully before using Our Service.
                    </p>
                  </div>
            </DialogContent>
        </Dialog>
    )
}
