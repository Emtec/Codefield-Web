import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Terms of use',
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
                        Terms of use
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-10">
                      <p>By accessing the website at http://codefield.pl/, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                        Use License
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <ul className='list-disc list-inside	'>
                        <li>Permission is granted to temporarily download one copy of the materials (information or software) on CodeField website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                          <ul className='list-disc list-inside	'>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on CodeField website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
                          </ul>
                        </li>

                        <li className='mt-3'>This license shall automatically terminate if you violate any of these restrictions and may be terminated by CodeField at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                        Disclaimer
                      </h2>
                    </div>
                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <ul className='list-disc list-inside	'>
                        <li>The materials on CodeField website are provided on an &apos;as is&apos; basis. CodeField makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>

                        <li className='mt-3'>
                        Further, CodeField does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                        Limitations
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>In no event shall CodeField or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CodeField website, even if CodeField or an CodeField authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you..</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      Accuracy of materials
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>The materials appearing on CodeField website could include technical, typographical, or photographic errors. CodeField does not warrant that any of the materials on its website are accurate, complete or current. CodeField may make changes to the materials contained on its website at any time without notice. However CodeField does not make any commitment to update the materials..</p>
                    </div>

                    <div className="mt-5 pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-1xl font-semibold text-neutral-950">
                      Links:
                      </h2>
                    </div>

                    <div className="pt-10 lg:flex-none lg:px-4 lg:pt-5">
                      <p>CodeField has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CodeField of the site. Use of any such linked website is at the user&apos;s own risk.</p>
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
