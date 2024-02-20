import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Privacy policy',
}

export default async function Blog() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
            <FadeIn>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:flex-col lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        Privacy policy
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-10">
                      <p>The new European Union (EU) data protection law, the General Data Protection Regulation (GDPR), comes into effect on 25th May 2018. The GDPR gives individuals in the EU more control over how their data is used and places certain obligations on businesses that process the information of those individuals, to implement necessary technical means to assure security and good practices to how the data is processed. In other words these new regulations allow you to have more control over your data. We’ve changed our Privacy Policy to reflect the new requirements of the GDPR.</p>

                      <p className='mt-5'>In order to continue using our services, we ask you to give us your consent to process your data by us and any entities cooperating with us in a way described below. Providing your personal data is voluntary, however without your permission, which is necessary, it will prevent us from providing you with a service.</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                        Basis and purpose of data processing:
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>What kind of data do we collect and why do we do that:</p>

                      <ul className='list-disc list-inside	'>
                        <li>E-mail address - in order to register an account, confirm a registration, change account password, communicate with users regarding technical matters or intermittently present them with recently implemented novelties within our platform.</li>
                        <li className='mt-3'>Login (account username)- in order to register an account, make further use of our services and to authorize and identify the account.</li>
                        <li className='mt-3'>IP address - in order to collect statistical and administrative data</li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                        We process your data for following purposes:
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <ul className='list-disc list-inside	'>
                        <li>To assure the security of our service (e.g. to register and evaluate whether there are unauthorized login attempts from any third party), protection of our servers from any incorrect use, to perform statistical measurements or improvements of our services to match them with our users comfort and needs, as well as to conduct marketing and promotional activities of our services.</li>

                        <li className='mt-3'>
                          Marketing activities - in order to conduct informational marketing campaigns on recently implemented novelties within our platform. In case of a marketing campaign, performed by sending an e-mail, the user reserves the right to amend these types of communications received from us by updating their preferences by reporting it on our mailbox kontakt@codefield.pl.
                        </li>
                        <li className='mt-3'>
                          User assistance - in order to assist users, basic data is processed to identify every user with their account.
                        </li>
                        <li className='mt-3'>
                          Administrative activities - as part of conducting an administrative activity which is a result of our servers and services rules.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      How long is the data stored for:
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>Your data will be processed only for the absolute time necessary until the basis to do so exists, in other words since the consent is given to the time of its withdrawal, restriction or other activities from your end that restricts this consent. In case data being necessary needed to execute an agreement, for the time of its execution and if need be to lapse the claims of it (usually no longer than 3 years, at the most 10 years) and in case where the basis of data processing is justified by the interest of an administrator, until the time you report an effective objection on our mailbox.</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      Data entrusting:
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>Data administrators are allowed to entrust your data to the IT subcontractors, accountants, marketing agencies etc. They will do that only on a basis of an agreement to entrust data processing which obligates such an entity to properly secure their data and to not use it for their own purposes.</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      Cookies:
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>Our websites and applications use internet tags such as files e.g. cookies or local storage to collect and process data in order to personalize content and advertisements as well as to analyze website, application and internet user traffic. Cookies are informational data which is saved as files and stored on your device or DTE (data terminal equipment) (such as your computer, tablet, smartphone etc.), which the browser sends to the server every time someone enters a website from a device or DTE, during as you visit websites on the internet</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      Your rights concerning personal data processing:
                      </h2>
                    </div>
                    
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <ul className='list-disc list-inside	'>
                        <li>User has the right to access your personal data collected by us, as well as the right to make a copy of it.</li>

                        <li className='mt-3'>
                          User has the right to delete your personal data as well as a right to permanently delete your account. A desire to delete your account needs to be reported by sending an email to kontakt@codefield.pl
                        </li>
                        <li className='mt-3'>
                        User has the right to submit a complaint to supervisory organs engaging in the security of personal data.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
