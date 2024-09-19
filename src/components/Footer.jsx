import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-white border-t border-gray-200 py-8">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                        {/* <!-- Left Section (Logo & Vision) --> */}
                        <div class="flex flex-col space-y-2">
                            <a href="#" class="text-2xl font-semibold text-blue-600">MORENT</a>
                            <p class="text-gray-600 max-w-xs">Our vision is to provide convenience and help increase your sales/business.</p>
                        </div>

                        {/* <!-- Right Section (Links) --> */}
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* <!-- About --> */}
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">About</h3>
                                <ul class="mt-4 space-y-2">
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">How it works</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Featured</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Partnership</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Business Relation</a></li>
                                </ul>
                            </div>

                            {/* <!-- Community --> */}
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Community</h3>
                                <ul class="mt-4 space-y-2">
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Events</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Blog</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Podcast</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Invite a friend</a></li>
                                </ul>
                            </div>

                            {/* <!-- Socials --> */}
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Socials</h3>
                                <ul class="mt-4 space-y-2">
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Discord</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Instagram</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Twitter</a></li>
                                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer Bottom --> */}
                    <div class="mt-8 border-t pt-6 text-center md:text-left">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="text-sm text-gray-500">&copy; 2022 MORENT. All rights reserved.</p>
                            <div class="space-x-6 mt-4 md:mt-0">
                                <a href="#" class="text-sm text-gray-500 hover:text-gray-900">Privacy & Policy</a>
                                <a href="#" class="text-sm text-gray-500 hover:text-gray-900">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
