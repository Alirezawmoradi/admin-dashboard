import {httpInterceptedService} from "@core/http-service.jsx";
import {Await, defer, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import CourseDetailsPages from "./course-details-pages.jsx";

const CourseDetails = () => {
    const data = useLoaderData();
    return (
            <Suspense fallback={<p className='text-info'>در حال دریافت اطلاعات ...</p>}>
                <Await resolve={data.details}>
                    {(courseDetails) => <CourseDetailsPages details={courseDetails}/>}
                </Await>
            </Suspense>
    )
}

export async function courseDetailsLoader({params}) {
    return defer({
        details: courseDetails(params),
    })
}

const courseDetails = async (params) => {
    const response = await httpInterceptedService.get(`/Course/by-id/${params.id}`);
    return response.data;
}

export default CourseDetails;

