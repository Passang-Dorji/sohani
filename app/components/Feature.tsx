"use client";
import Image from "next/image";
export default function FeaturesPhone() {
	return (
		<div className="sm:py-16 lg:py-5 bg-gradient-to-br from-purple-500 via-indigo-400 to-pink-300 opacity-75">
			<div className="w-full py-16 flex justify-center">
				<div className="group relative">
					<div className="relative w-[200px] aspect-[9/19.5] rounded-[2rem] bg-black shadow-2xl border-[10px] border-neutral-900 overflow-hidden">
						<div className="absolute left-1/2 top-0 -translate-x-1/2 h-5 w-28 bg-black rounded-b-2xl"></div>

						<div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-400 to-pink-300 overflow-hidden">
							<div className="absolute top-0 left-0 w-full text-center">
								<p className="py-8 font-semibold text-primary text-sm">
									SOHANI
								</p>
							</div>

							<div className="absolute top-12 bottom-0 w-full overflow-hidden px-2">
								<div className="animate-scrollY space-y-4">
									<div className="rounded-lg p-3 shadow bg-gray-700/30">
										<div className="flex justify-center">
											<Image
												src="/images/images.png"
												alt="organization"
												width={80}
												height={80}
												className="object-cover"
											/>
										</div>
										<h3 className="text-sm font-semibold text-primary mb-2">
											Organization Management
										</h3>
										<p className="text-secondary text-xs">
											Easily manage multiple sports organizations, assign
											admins, and control settings per organization.
										</p>
									</div>

									<div className="rounded-lg p-3 shadow bg-transparent/30">
										<div className="flex justify-center">
											<Image
												src="/images/court_schedule.png"
												alt="schedule"
												width={96}
												height={96}
											/>
										</div>
										<h3 className="text-sm font-semibold text-primary mb-2">
											Court Scheduling
										</h3>
										<p className="text-secondary text-xs">
											Create, book, and manage courts efficiently with real-time
											availability and conflict detection.
										</p>
									</div>

									<div className="rounded-lg p-3 shadow  bg-transparent/30">
										<div className="flex justify-center">
											<Image
												src="/images/member_control.png"
												alt="member control"
												width={96}
												height={96}
											/>
										</div>
										<h3 className="text-sm font-semibold text-primary mb-2">
											Member Access Control
										</h3>
										<p className="text-secondary text-xs">
											Control member permissions, roles, and activity
											participation based on their profile.
										</p>
									</div>

									<div className="rounded-lg p-3 shadow  bg-transparent/30">
										<div className="flex justify-center">
											<Image
												src="/images/org_management.png"
												alt="organization"
												width={80}
												height={80}
											/>
										</div>
										<h3 className="text-sm font-semibold text-primary mb-2">
											Organization Management
										</h3>
										<p className="text-secondary text-xs">
											Easily manage multiple sports organizations, assign
											admins, and control settings per organization.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between text-white/90">
							<Image
								src="/logo.png"
								alt="logo"
								width={16}
								height={16}
								className="object-cover"
							/>
							<span className="text-[10px]">12:30</span>
						</div>

						<label className="absolute bottom-3 left-1/2 -translate-x-1/2">
							<p>Menu</p>
						</label>
					</div>

					<div
						className="absolute -right-20 top-0 w-[200px] origin-left rounded-xl bg-white shadow-lg border border-amber-100 p-3
            translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-300 ease-out [transform:rotateY(-6deg)]"
					>
						<div className="flex justify-center">
							<Image
								src="/images/object.png"
								alt="soap"
								width={128}
								height={64}
								className="object-cover"
							/>
						</div>
						<p className="text-xs text-primary mt-1">Organization Management</p>
					</div>

					<div
						className="absolute -right-8 top-36 w-[220px] origin-left rounded-xl bg-white shadow-lg border border-amber-100 p-4
            translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-400 ease-out [transform:rotateY(-6deg)]"
					>
						<div className="flex justify-center">
							<Image
								src="/images/court_schedule.png"
								alt="schedule"
								width={128}
								height={64}
								className="object-cover"
							/>
						</div>
						<p className="font-semibold text-primary text-xs">
							Court Scheduling
						</p>
					</div>

					<div
						className="absolute -right-24 bottom-12 w-[180px] origin-left rounded-xl bg-white shadow-lg border border-amber-100 p-3
            translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-500 ease-out [transform:rotateY(-6deg)]"
					>
						<div className="flex justify-center">
							<Image
								src="/images/member_control.png"
								alt="member control"
								width={128}
								height={64}
								className="object-cover"
							/>
						</div>
						<p className="font-semibold text-primary text-xs">
							Member Access Control
						</p>
					</div>
					<div
						className="absolute -left-24 top-0 w-[180px] origin-right rounded-xl bg-white shadow-lg border border-amber-100 p-3
            -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-300 ease-out [transform:rotateY(6deg)]"
					>
						<div className="flex justify-center">
							<Image
								src="/images/report_analysis.png"
								alt="report"
								width={128}
								height={64}
								className="object-cover"
							/>
						</div>
						<p className="font-semibold text-primary text-xs">
							Report and Analysis
						</p>
					</div>

					<div
						className="absolute -left-20 bottom-12 w-[200px] origin-right rounded-xl bg-white shadow-lg border border-amber-100 p-3
            -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-500 ease-out [transform:rotateY(6deg)]"
					>
						<div className="flex justify-center">
							<Image
								src="/images/mobile_friendly.png"
								alt="mobile"
								width={128}
								height={64}
								className="object-cover"
							/>
						</div>
						<p className="font-semibold text-primary text-xs">
							Mobile Friendly
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
